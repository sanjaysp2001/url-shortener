// import { useState } from "react";

const URLInputForm = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const handleFormSubmit = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // };
  return (
    <div className="flex items-center col-span-2 w-11/12">
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
          required
        />
      </div>
      <button
        type="button"
        className="mt-8 ml-6 text-white w-[100px] bg-gradient-to-br from-primary-color to-secondary-color hover:bg-gradient-to-bl font-medium rounded-2xl  text-md px-8 py-3.5 text-center transform active:scale-90 transition-transform"
        //onClick={handleFormSubmit}
      >
        <span>Go</span>
      </button>
    </div>
  );
};

export default URLInputForm;
