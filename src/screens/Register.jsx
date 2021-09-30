import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { userRegister } from "../actions/userActions";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Register = ({ userRegister, user, loading }) => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const { name, email, password, cpassword } = data;

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      data.password !== data.cpassword ||
      data.password.length < 8 ||
      data.email.length === 0 ||
      data.name.length === 0
    ) {
      console.log("error");
    } else {
      userRegister(data);
    }
  };

  if (user && user.length > 0) {
    return <Redirect to="/" />;
  }
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
                htmlFor="name"
              >
                {t("register_name")}
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                id="name"
                type="text"
                name="name"
                required
                onChange={onChange}
                value={name}
                placeholder="name"
              />
            </div>
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
                onChange={onChange}
                value={email}
                placeholder="example@gmail.com"
              />
            </div>
            {data.password !== data.cpassword ? (
              <Fragment>
                <div className="mb-4">
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
                    onChange={onChange}
                    value={password}
                    placeholder="******************"
                  />
                </div>
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
                    name="cpassword"
                    onChange={onChange}
                    value={cpassword}
                    placeholder="******************"
                  />

                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                  {data.name.length === 0 ? (
                    <p className="text-red-500 text-xs italic">
                      Please enter name.
                      {t("register_name_error")}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.email.length === 0 ? (
                    <p className="text-red-500 text-xs italic">
                      Please enter email.
                      {t("register_email_error")}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.password.length < 8 ? (
                    <p className="text-red-500 text-xs italic">
                      {t("register_password_error")}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    {t("register_password")}
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
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    {t("register_password")}
                  </label>
                  <input
                    className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                    id="password"
                    type="password"
                    name="cpassword"
                    onChange={onChange}
                    value={cpassword}
                    placeholder="******************"
                  />
                  {data.name.length === 0 ? (
                    <p className="text-red-500 text-xs italic">
                      {t("register_name_error")}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.email.length === 0 ? (
                    <p className="text-red-500 text-xs italic">
                      {t("register_email_error")}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.password.length < 8 ? (
                    <p className="text-red-500 text-xs italic">
                      {t("register_password_error")}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </Fragment>
            )}

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {t("register_menu")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  user: state.auth.user,
});

Register.propTypes = {
  userRegister: PropTypes.func,
  user: PropTypes.object,
};

export default connect(mapStateToProps, { userRegister })(Register);
