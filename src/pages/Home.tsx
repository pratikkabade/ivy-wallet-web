import { useState } from "react";
import { Tutorial } from "../components/Tutorial";
import { ProjectNavbar } from "../components/layout/ProjectNavbar";
import { ProjectFooter } from "../components/layout/ProjectFooter";
import { Link } from "react-router-dom";

export const Home = () => {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible(!visible);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <div className="slide-up">
        <ProjectNavbar />
        <div className="w-2/3 mx-auto my-28 ">
          <p className="lg:text-7xl md:text-5xl text-3xl mb-10 text-center font-extrabold">
            Track your expenses, fast and on-the-go! ⚡
          </p>
          <p className="lg:text-3xl md:text-2xl text-xl mb-10 text-center">
            Imagine Ivy Wallet as a manual expense tracker that will replace the
            good old spreadsheet for managing your personal finance.
          </p>
        </div>
        <div className="flex flex-row justify-around my-28">
          <Link
            to="/"
            className="bg-emerald-200 hover:shadow-2xl hover:brightness-125 dark:bg-emerald-600 p-3 px-5 text-xl font-semibold rounded-full"
          >
            Dashboard <i className="fa-solid fa-arrow-right"></i>
          </Link>
          {!visible && (
            <a
              className="bg-slate-200 hover:shadow-2xl hover:brightness-75 dark:bg-slate-600 p-3 px-5 text-xl font-semibold rounded-full"
              onClick={toggleVisibility}
              href="#tutorial"
            >
              Tutorial <i className="fa-solid fa-angle-down"></i>
            </a>
          )}
        </div>
        {visible && (
          <div className="flex flex-col justify-center mb-10">
            <div className="bg-slate-100 dark:bg-slate-800">
              <Tutorial />
            </div>
            {visible && (
              <button
                className="bg-slate-200 hover:shadow-2xl hover:brightness-75 dark:bg-slate-600 p-3 px-5 text-xl font-semibold rounded-b-full w-fit mx-auto"
                onClick={toggleVisibility}
              >
                Hide <i className="fa-solid fa-angle-up"></i>
              </button>
            )}
          </div>
        )}
        <ProjectFooter />
      </div>
    </div>
  );
};
