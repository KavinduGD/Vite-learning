import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>dfddfd</p>} />
        <Route path="/home" element={<p>dsdsdsdsdssssssssss</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
