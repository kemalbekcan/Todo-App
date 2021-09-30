import React, { Fragment } from "react";
import TableItem from "./TableItem";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

const Table = ({ todoItems }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="flex flex-row justify-center mb-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("table_header")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("table_description")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("table_category")}
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">{t("table_edit")}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {todoItems &&
                    todoItems.map((item, index) => {
                      return <TableItem item={item} key={index} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  todoItems: state.todos.todoItems,
});

export default connect(mapStateToProps, {})(Table);
