import "./App.css";
import GradientSpinner from "./components/GradientSpinner";
import Hero from "./components/Hero";
import ImageComponent from "./components/ImageComponent";
import URLInputForm from "./components/URLInputForm";

function App() {
  return (
    <div>
      <div className="py-8 px-4 mx-[5%] text-center lg:py-16 lg:px-12">
        <Hero />
        {/* <GradientSpinner/> */}
      </div>
      <div className="grid grid-cols-3 gap-x-1 h-5/6">
        <ImageComponent />
        <URLInputForm />
      </div>
    </div>
  );
}

export default App;
