import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const TableItem = ({ item }) => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const openToggle = () => {
    setOpenModal(true);
    localStorage.setItem("toggle", openModal);
  };

  return (
    <Fragment>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="User Avatar"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {item.header}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{item.description}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {item.category.slice(0, 1).toUpperCase() +
              item.category.slice(1, item.category.length)}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            className="text-indigo-600 hover:text-indigo-900"
            onClick={openToggle}
          >
            {t("table_edit")}
          </button>
        </td>
      </tr>
      {openModal === true ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal} item={item} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default TableItem;
