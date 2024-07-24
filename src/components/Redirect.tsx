import axios from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../config/endpoints.js";
import { useParams } from "react-router";
const Redirect = () => {
  const [displayMessage, setDisplayMessage] = useState("Loading...");
  let { url } = useParams();

  useEffect(() => {
    axios
      .get(`${endpoints.GET_LONG_URL}/${url}`)
      .then((res) => {
        console.log(res);

        setDisplayMessage("Redirecting now...");
        window.location.replace(res.data.originalURL);
      })
      .catch((err) => {
        console.log(err);

        setDisplayMessage("Error. URL does not exists!");
      });
  });
  return (
    <>
      <div className=" flex items-center justify-center flex-col w-full h-full fixed top-0 left-0 ">
        {displayMessage == "Loading..." ? (
          <div className="flex space-x-2 justify-center items-center mt-10 ">
            <div className="h-8 w-8 bg-secondary-color rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-secondary-color rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-secondary-color rounded-full animate-bounce"></div>
          </div>
        ) : (
          <h1 className="text-secondary-color text-4xl">{displayMessage}</h1>
        )}
      </div>
    </>
  );
};

export default Redirect;
