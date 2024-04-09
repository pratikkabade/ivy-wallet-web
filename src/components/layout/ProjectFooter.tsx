import { useState } from "react";

export const ProjectFooter = () => {
  const [show, setShow] = useState(false);

  return (
    <footer className="text-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
      {show && (
        <div className="container px-6 pt-6 mx-auto slide-up">
          <div className="mb-20">
            <p className="font-bold text-xl" id="footer">
              Ivy-Wallet-Web
            </p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">ivy-wallet-web</h5>
              <ul className="list-none mb-0">
                <li>
                  <a
                    href="https://github.com/pratikkabade/ivy-wallet-web/"
                    className="text-sky-700 dark:text-sky-300 hover:brightness-125 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pratikkabade/ivy-wallet-web/issues"
                    className="text-sky-700 dark:text-sky-300 hover:brightness-125 hover:underline"
                  >
                    Issues
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">IvyWallet</h5>
              <ul className="list-none mb-0">
                <li>
                  <a
                    href="https://github.com/Ivy-Apps/ivy-wallet"
                    className="text-sky-700 dark:text-sky-300 hover:brightness-125 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <a href="#footer">
        <div
          className="text-center p-5 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
          onClick={() => {
            setShow(!show);
          }}
        >
          © 2024 Ivy-Wallet-Web
          {show ? (
            <i className="fas fa-chevron-up ml-2"></i>
          ) : (
            <i className="fas fa-chevron-down ml-2"></i>
          )}
        </div>
      </a>
    </footer>
  );
};
