import { LoadingTransactionItem } from "./core/LoadingTransactionItem";

export const AnimatedLoader = () => {
  return (
    <div>
      <div className="flex flex-col w-full text-4xl font-bold text-center select-none py-10 fade-in scrl">
        <div>
          Total:
          <span className="bg-slate-200 text-slate-200 mx-2 rounded-xl animate-pulse">
            sum
          </span>
        </div>
        <div className="flex justify-center  w-full text-4xl font-bold text-center items-center">
          <div className="flex flex-row flex-wrap justify-around text-lg font-bold my-5">
            <p className="bg-slate-50 text-slate-100 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer animate-pulse">
              <i className="fa-solid fa-filter mr-2"></i>
              Category
            </p>
            <p className="bg-slate-50 text-slate-100 p-2 px-10 m-1 rounded-full hover:shadow-md cursor-pointer animate-pulse">
              <i className="fa-solid fa-filter mr-2"></i>
              Account
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row mx-auto justify-center items-center">
          <div className="flex justify-center flex-wrap slide-r">
            <LoadingTransactionItem />
            <LoadingTransactionItem />
            <LoadingTransactionItem />
            <LoadingTransactionItem />
          </div>
        </div>
      </div>
    </div>
  );
};
