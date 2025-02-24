import Navbar from "./components/navbar";
import Description from "./pages/descriptionpage";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import SignUp from "./pages/Signup";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage />} /> 
              {/* <Route path="/home" element={<HomePage />} /> */}
              <Route path="/navbar" element={<Navbar />}>
                <Route index element={<Description />} />
                <Route path="description" element={<Description />} />
              </Route>
              <Route path="/singup" element = {<SignUp />} />
          </Routes>
      </BrowserRouter>
  );
}


export default App;