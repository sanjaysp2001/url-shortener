import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
// import GradientSpinner from "./components/GradientSpinner";
import Hero from "./components/Hero";
import ImageComponent from "./components/ImageComponent";
import URLInputForm from "./components/URLInputForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer limit={3}/>
      <div className="pt-10 pb-4 px-4 mx-[5%] text-center lg:py-16 lg:px-12">
        <Hero />
      </div>
      <div className="grid grid-cols-3 gap-x-1 h-5/6">
        <ImageComponent />
        <URLInputForm />
      </div>
    </div>
  );
}

export default App;
