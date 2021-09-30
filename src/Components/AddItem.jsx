import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { addTodoItem } from "../actions/todoActions";
import { v4 as uuidv4 } from "uuid";

const AddItem = ({ addTodoItem }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    id: uuidv4(),
    header: "",
    description: "",
    category: "select",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { header, description, category } = data;

  const onSubmit = (e) => {
    e.preventDefault();
    addTodoItem(data);
  };
  return (
    <Fragment>
      <div className="w-1/2 mt-5 mb-5 mx-auto shadow-lg border rounded">
        <form
          className="block text-gray-700 text-sm font-bold mb-2"
          onSubmit={onSubmit}
        >
          <label className="block pl-5 pt-5">{t("add_item_header")}:</label>
          <div className="mb-4 pl-5 pr-5 pt-3 flex justify-center items-center">
            <input
              className="w-full shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="header"
              onChange={onChange}
              value={header}
              type="text"
            />
          </div>
          <label className="block pl-5">{t("add_item_description")}:</label>
          <div className="mb-4 pr-5 pl-5 pt-3 flex justify-center items-center">
            <input
              className="w-full shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              onChange={onChange}
              value={description}
              type="text"
            />
          </div>
          <label className="block pl-5">{t("add_item_category")}:</label>
          <div className="mb-4 pr-5 pl-5 pt-3 flex justify-center items-center">
            <select
              name="category"
              onChange={onChange}
              value={category}
              className="w-full form-select border py-3 px-3 rounded shadow-lg"
            >
              <option defaultValue="select">{t('option_default_value')}</option>
              <option value={t('option_other_value')}>{t('option_other_value')}</option>
            </select>
          </div>
          <div className="p-5 mb-4 w-1/2 mx-auto text-center">
            <button className="w-24 ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
              {t("add_item_button")}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default connect(null, { addTodoItem })(AddItem);
