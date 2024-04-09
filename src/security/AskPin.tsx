import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { ForgotPin } from "./ForgotPin";
import { UserName } from "../data/UserName";

export const AskPin = () => {
  const [pin, setPin] = useState(0);
  const [realpin, setRealPin] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const [openModal, setOpenModal] = useState<string | "dont show">();
  const props = { openModal, setOpenModal };

  useEffect(() => {
    const pin = localStorage.getItem("pin");
    if (pin !== null && pin !== "0") {
      setRealPin(parseInt(pin));
      setShow(true);
    }
  }, []);

  const handlePin = () => {
    if (pin === realpin) {
      setSuccess(true);
      setError("Welcome Back, ");
    } else {
      setError("Incorrect Pin, Try Again");
    }
  };

  // set props.openModal to undefined after 5 sec
  !success &&
    setTimeout(() => {
      props.setOpenModal("enterpintocontinue");
      const inp = document.getElementById("pin");
      inp?.focus();
    }, 2500);

  return (
    <>
      {show && (
        <Modal
          className="fade-in h-screen"
          show={props.openModal === "enterpintocontinue"}
          onClose={() => success && props.setOpenModal(undefined)}
        >
          <Modal.Header>Please enter the Pin to continue</Modal.Header>
          <Modal.Body className="slide-up">
            <div className="justify-center">
              <div className="slide-up flex flex-col justify-center">
                {!success && (
                  <div className="flex flex-row justify-center align-middle items-center">
                    <input
                      id="pin"
                      type="password"
                      className="border-2 border-gray-300 rounded-lg p-2"
                      max={9999}
                      min={0}
                      maxLength={4}
                      placeholder="Enter Pin"
                      // dont allow digits above 4
                      onChange={(e) => {
                        setPin(parseInt(e.currentTarget.value));
                      }}
                      onInput={(e) => {
                        if (e.currentTarget.value.length > 5) {
                          e.currentTarget.value = e.currentTarget.value.slice(
                            0,
                            4
                          );
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fade-in2 h-fit w-fit ml-3"
                      onClick={() => {
                        handlePin();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                )}

                {error && (
                  <p className="flex flex-row flex-wrap justify-center text-xl lg:text-3xl my-5 fade-in2">
                    {!success && (
                      <span className="text-rose-700 dark:text-rose-200">
                        {error}
                      </span>
                    )}
                    {success && error}
                    {success && (
                      <span className="ml-2 font-semibold">{UserName()}</span>
                    )}
                  </p>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-around items-center">
            {success ? (
              <button
                onClick={() => {
                  setOpenModal("false");
                }}
                type="button"
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fade-in"
              >
                Continue
              </button>
            ) : (
              <ForgotPin />
            )}
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
