import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import isURL from "validator/es/lib/isURL";
// import Modal from "react-minimal-modal";
import GradientSpinner from "./GradientSpinner";
import endpoints from "../config/endpoints.json";
import CustomModal from "./Modal";

const URLInputForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    long_url: "",
    error: "",
    short_url: "",
  });
  const handleFormSubmit = () => {
    if (formData.long_url != "") {
      if (isURL(formData.long_url)) {
        setIsLoading(true);
        axios
          .post(endpoints.createURL, {
            url: formData.long_url,
          })
          .then((res) => {
            console.log(res.data);
            setFormData({
              ...formData,
              short_url: `https://${import.meta.env.VITE_BACKEND_HOSTNAME}/${
                res.data.shortURL
              }`,
            });
            setIsModalOpen(true);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setFormData({
              ...formData,
              error: err,
            });
            setIsModalOpen(true);
            setIsLoading(false);
          });
        //Do the backend api calls
      } else {
        toast.error("Please enter a valid URL!", {
          position: "top-right",
          autoClose: 2500,
          pauseOnHover: false,
          closeOnClick: true,
        });
      }
    } else {
      toast.error("URL cannot be empty!", {
        position: "top-right",
        autoClose: 2500,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }

    // setTimeout(() => {
    //   setIsLoading(false);
    //   console.log(formData);
    // }, 2000);
  };

  return (
    <>
      {isLoading && <GradientSpinner />}
      {isModalOpen && (
        <CustomModal setIsModalOpen={setIsModalOpen} url={formData.short_url} />
      )}

      <div className="flex flex-col items-center col-span-3 md:w-11/12 md:flex-row md:col-span-2">
        <div className="w-9/12">
          <label
            htmlFor="long_url"
            className="block text-xl font-medium mb-2 text-secondary-color"
          >
            Type or paste your URL here
          </label>
          <input
            name="url"
            type="link"
            id="long_url"
            className="w-full p-4 rounded-2xl focus:outline-primary-color"
            placeholder="https://"
            value={formData.long_url}
            onChange={(e) => {
              setFormData({ ...formData, long_url: e.target.value });
            }}
            required
          />
        </div>

        <button
          type="button"
          className="mt-8 md:ml-6 text-white w-[100px] bg-gradient-to-br from-primary-color to-secondary-color hover:bg-gradient-to-bl font-medium rounded-2xl  text-md px-8 py-3.5 text-center transform active:scale-90 transition-transform"
          onClick={handleFormSubmit}
        >
          <span>Go</span>
        </button>
      </div>
    </>
  );
};

export default URLInputForm;
