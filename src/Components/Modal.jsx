import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { todoItemDelete, todoItemUpdate } from "../actions/todoActions";

const Modal = ({ setOpenModal, todoItemDelete, item, todoItemUpdate }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    id: item.id,
    header: item.header,
    description: item.description,
    category: item.category,
  });

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const { header, description, category } = data;

  const onSubmit = (event) => {
    event.preventDefault();
    todoItemUpdate(data);
  };

  return (
    <Fragment>
      <div
        className="w-full h-full bg-white fixed top-0 left-0"
        style={{ background: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="w-1/2 -mt-12 bg-white transform translate-x-1/2 translate-y-1/2 rounded shadow-lg">
          <span
            className="pl-3 cursor-pointer block"
            onClick={() => setOpenModal(false)}
          >
            x
          </span>

          <form
            className="block text-gray-700 text-sm font-bold"
            onSubmit={onSubmit}
          >
            <div className="mb-2 pl-5 pr-5 pt-3">
              <label className="-ml-5 mb-2 block pl-5 pt-5">
                {t("table_header")}
              </label>
              <div className="mb-2 w-full">
                <input
                  className="w-full shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="header"
                  type="text"
                  value={header}
                  onChange={onChange}
                />
              </div>
              <label className="-ml-5 mb-2 block pl-5 pt-5">
                {t("table_description")}
              </label>
              <div className="mb-2 w-full">
                <input
                  className="w-full shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="description"
                  type="text"
                  value={description}
                  onChange={onChange}
                />
              </div>
              <label className="-ml-5 mb-2 block pl-5 pt-5">
                {t("add_item_category")}
              </label>
              <div className="mb-2 w-full">
                <select
                  name="category"
                  className="w-full form-select border py-3 px-3 rounded shadow-lg"
                  value={category}
                  onChange={onChange}
                >
                  <option defaultValue={t("option_default_value")}>
                    {t("option_default_value")}
                  </option>
                  <option value={t("option_other_value")}>
                    {t("option_other_value")}
                  </option>
                </select>
              </div>
            </div>
            <div className="mb-2 flex justify-start">
              <button className="block w-24 mb-4 mt-2 ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {t("add_item_button_update")}
              </button>
              <button
                className="block w-24 ml-5 mt-2 mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => todoItemDelete(item.id)}
              >
                {t("add_item_button_delete")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { todoItemDelete, todoItemUpdate })(Modal);
