import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BookingCar from "./pages/BookingCar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/bookingcar" element={<BookingCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
