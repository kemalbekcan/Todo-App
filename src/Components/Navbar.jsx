import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../actions/userActions";

const Navbar = ({ userLogout, user }) => {
  const currentLanguageCode = Cookies.get("i18next") || "en";

  const { t } = useTranslation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "tr",
      name: "Türkiye",
      country_code: "tr",
    },
  ];
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguage, t]);
  return (
    <Fragment>
      <div
        className="w-full shadow-lg block sm:justify-between md:flex md:flex align-center md:justify-between"
        style={{ background: "rgba(0,0,0,0.92)" }}
      >
        <div className="hidden md:block">
          <h1 className="ml-5 p-5 text-white">Logo</h1>
        </div>
        <nav className="">
          <ul className="flex align-center justify-center mr-5">
            <li className="p-5 hidden md:block">
              <Link
                to="/"
                className="text-white p-3 border-2 border-opacity-0 hover:border-gray-300 rounded-lg"
              >
                {t("home_menu")}
              </Link>
            </li>
            {user && user.length > 0 ? (
              <Fragment>
                <li className="p-5 hidden md:block">
                  <button className="text-white" onClick={() => userLogout()}>
                    Çıkış Yap
                  </button>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className="p-5 hidden md:block">
                  <Link
                    to="/register"
                    className="text-white p-3 border-2 border-opacity-0 hover:border-gray-300 rounded-lg"
                  >
                    {t("register_menu")}
                  </Link>
                </li>
                <li className="p-5 hidden md:block">
                  <Link
                    to="/login"
                    className="text-white p-3 border-2 border-opacity-0 hover:border-gray-300 rounded-lg"
                  >
                    {t("login_menu")}
                  </Link>
                </li>
              </Fragment>
            )}

            {openLanguage === true ? (
              <li
                className="p-5 hidden md:block"
                onClick={() => setOpenLanguage(false)}
              >
                <i className="text-white cursor-pointer fas fa-globe-europe">
                  <div className="absolute right-10 bg-white w-24 rounded shadow-lg mt-2">
                    <ul className="">
                      {languages.map(({ code, name, country_code }) => (
                        <li className="hover:bg-black" key={country_code}>
                          <button
                            className="text-black block w-full p-2 hover:text-white"
                            onClick={() => i18next.changeLanguage(code)}
                            disabled={code === currentLanguageCode}
                            style={{
                              opacity: code === currentLanguageCode ? 0.5 : 1,
                            }}
                          >
                            {name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </i>
              </li>
            ) : (
              <li
                className="p-5 hidden md:block"
                onClick={() => setOpenLanguage(true)}
              >
                <i className="text-white cursor-pointer fas fa-globe-europe"></i>
              </li>
            )}

            <li className="p-5 md:hidden flex justify-start w-full">
              {navbarOpen === true ? (
                <button className="" onClick={() => setNavbarOpen(false)}>
                  <i className="fas fa-bars text-white"></i>
                </button>
              ) : (
                <button className="" onClick={() => setNavbarOpen(true)}>
                  <i className="fas fa-bars text-white"></i>
                </button>
              )}
            </li>
          </ul>
          {navbarOpen === true ? (
            <Fragment>
              <div className="block">
                <ul className="">
                  <li className="p-5 md:hidden">
                    <h1 className="text-white">Logo</h1>
                  </li>
                  <li className="p-5 md:hidden">
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li className="p-5 md:hidden">
                    <Link to="/register" className="text-white">
                      Register
                    </Link>
                  </li>
                  <li className="p-5 md:hidden">
                    <Link to="/login" className="text-white">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </Fragment>
          ) : (
            ""
          )}
        </nav>
      </div>

      {/*Mobile */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

Navbar.propTypes = {
  userLogout: PropTypes.func,
  user: PropTypes.object
};

export default connect(mapStateToProps, { userLogout })(Navbar);
