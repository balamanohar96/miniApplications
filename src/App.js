import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/First";
import Home from "./components/Home";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";

function App() {
  return (
    <>
      <BrowserRouter>
        <h2 className="main-heading">welcome to react after many days.</h2>
        <Home />

        <Routes>
          <Route exact path="/first" element={<First></First>} />
          <Route exact path="/second" element={<Second></Second>} />
          <Route exact path="/third" element={<Third></Third>} />
          <Route exact path="/fourth" element={<Fourth></Fourth>} />
          <Route exact path="/fifth" element={<Fifth></Fifth>} />
          <Route exact path="/sixth" element={<Sixth />} />
          <Route exact path="/seventh" element={<Seventh />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
