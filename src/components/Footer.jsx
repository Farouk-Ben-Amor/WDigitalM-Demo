function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Lets keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-linkedin" />
                </button>
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6 justify-end">
                <div className="w-full lg:w-8/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Departments
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Paris, FRANCE : +33 7 67 45 83 02
                      </p>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Berlin, GERMANY : +49 176 31 42 03 23
                      </p>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Miami, USA : +1 321 961 6038
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year"> {currentYear} </span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  by {" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/faroukbenamor/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Farouk Ben Amor {" "}
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
