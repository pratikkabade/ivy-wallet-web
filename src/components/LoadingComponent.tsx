import { Link } from "react-router-dom";
import { AnimatedLoader } from "./AnimatedLoader";
import { useUrlContext } from "../context/UrlContext";

export const LoadingComponent = () => {
  // fetch url from local storage
  const {
    data: { url },
  } = useUrlContext();

  if (url === "") {
    return (
      <div className="container my-32 flex flex-wrap flex-col mx-auto justify-center items-center text-center text-4xl font-bold">
        <h1>Seems like you haven't added the URL</h1>
        <h2 className="text-3xl font-semibold">
          See the tutorial to
          <Link
            to={"/About"}
            className="text-sky-700 dark:text-sky-300 hover:brightness-125 hover:underline ml-2"
          >
            get started
          </Link>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="container my-32 flex flex-wrap flex-col mx-auto justify-center items-center text-center text-4xl font-bold">
        <div id="chn1">
          <div className="-my-32">
            <AnimatedLoader />
          </div>
        </div>
        <div id="chn2"></div>
      </div>
    );
  }
};
