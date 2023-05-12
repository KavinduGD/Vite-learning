import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import NavBar from "./component/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
