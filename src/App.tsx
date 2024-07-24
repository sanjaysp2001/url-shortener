import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Redirect from "./components/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:url" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
