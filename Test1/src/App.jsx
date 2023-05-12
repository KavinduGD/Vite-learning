import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NavBar from "./component/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
