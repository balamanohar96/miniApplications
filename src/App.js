import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import NamesList from "./components/NamesList";
import NameSearch from "./components/NameSearch";
import FullName from "./components/FullName";
import ToDo from "./components/ToDo";
import DynamicDropdown from "./components/DynamicDropdown";
import HoveredDropdown from "./components/HoveredDropdown";

function App() {
  return (
    <>
      <BrowserRouter>
        <h2 className="main-heading">welcome to react after many days.</h2>

        <Home />

        <Routes>
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/names" element={<NamesList />} />
          <Route exact path="/namesearch" element={<NameSearch></NameSearch>} />
          <Route exact path="/fullName" element={<FullName />} />
          <Route exact path="/todo" element={<ToDo></ToDo>} />
          <Route exact path="/dynamicDropdown" element={<DynamicDropdown />} />
          <Route exact path="/hoveredDropdown" element={<HoveredDropdown />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
