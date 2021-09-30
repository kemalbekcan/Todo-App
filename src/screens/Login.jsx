import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const { email, password } = data;

  const onSubmit = (event) => {
    event.preventDefault();
    if (data.email.length === 0 || data.password.length === 0) {
      console.log("hata");
    } else {
      console.log(data);
    }
  };

  return (
    <Fragment>
      <div className="max-w-full mt-10 pt-3 rounded overflow-hidden flex justify-content">
        <img className="" src="../img/login.png" alt="Login" />
        <div className="px-10 py-4 pt-10 mt-10">
          <form
            className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={onSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                {t("register_email")}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                id="email"
                type="text"
                name="email"
                required
                value={email}
                onChange={onChange}
                placeholder="email"
              />
            </div>
            {data.password.length === 0 ? (
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  {t("register_password")}
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  id="password"
                  type="password"
                  name="password"
                  required
                  onChange={onChange}
                  value={password}
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  {t("register_password_choice")}
                </p>
              </div>
            ) : (
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={password}
                  placeholder="******************"
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {t("login_menu")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
