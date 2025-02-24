import Navbar from "./components/navbar";
import Description from "./pages/descriptionpage";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import SignUp from "./pages/Signup";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Feed from "./components/feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route for login */}
        <Route path="/" element={<LoginPage />} />

        {/* Nested routes under Navbar */}
        <Route path="/navbar" element={<Navbar />}>
          <Route index element={<Description />} /> {/* Default child route */}
          <Route path="description" element={<Description />} /> {/* Relative path */}
        </Route>

        {/* Signup route */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;