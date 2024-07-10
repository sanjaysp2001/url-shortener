const URLInputForm = () => {
  return (
    <div className="w-11/12">          
      <input
        type="link"
        id="long_url"
        className="p-4 w-3/4  rounded-2xl focus:outline-primary-color"
        placeholder="Enter your URL here..."
        required
      />
    </div>
  );
};

export default URLInputForm;
