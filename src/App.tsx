import "./App.css";
import ImageComponent from "./components/ImageComponent";
import URLInputForm from "./components/URLInputForm";

function App() {
  return (
    <div className="flex items-center justify-between m-auto">
      <ImageComponent/>
      <URLInputForm />
    </div>
  );
}

export default App;
