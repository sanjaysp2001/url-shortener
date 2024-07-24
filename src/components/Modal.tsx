import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { useState } from "react";
const CustomModal = ({ setIsModalOpen, url, error, setFormData }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 "
    >
      <motion.div
        initial={{ scale: 0, rotate: "12.5deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        exit={{ scale: 0, rotate: "0deg" }}
        onClick={(e) => e.stopPropagation()}
        className="relative top-40 mx-auto shadow-xl rounded-md bg-bg-color max-w-md rounded-xl"
      >
        <button
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-4xl rounded-full p-2 text-white"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col align-center justify-center p-2 animate-zoom">
          {error ? (
            <svg
              className="h-11 w-11 text-red-600 mx-auto mt-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#059669] h-11 rounded-full bg-[#D1FAE5] w-11 mx-auto mt-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}

          <p className="text-2xl font-medium text-center mt-3 text-secondary-color">
            {error
              ? "Some error occured. Please try later!"
              : "Short URL Generated!"}
          </p>
        </div>

        <div className=" flex align-center  justify-center p-6 pt-0 text-center">
          <div>
            {error ? (
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                {error.message}
              </h3>
            ) : (
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                {url}
              </h3>
            )}
          </div>
          {!error && (
            <div className=" ml-4 mt-4">
              <button
                type="button"
                data-tooltip-id="copy-tooltip"
                data-tooltip-content={"Copy to clipboard"}
                data-tooltip-variant="light"
                onClick={async () => {
                  setIsCopied(true);
                  await navigator.clipboard.writeText(url);
                  setTimeout(() => {
                    setIsModalOpen(false);
                    setFormData({ long_url: "", short_url: "", error: "" });
                  }, 1000);
                }}
                className="px-3 py-2 text-white bg-gradient-to-br from-primary-color to-secondary-color hover:bg-gradient-to-bl font-medium rounded-md  text-sm  text-center transform active:scale-90 transition-transform"
              >
                {isCopied ? (
                  <svg
                    className="h-5 w-5 text-white-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    ></path>
                  </svg>
                )}
              </button>
              <Tooltip id="copy-tooltip" />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomModal;
