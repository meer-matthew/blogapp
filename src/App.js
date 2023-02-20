import "./App.css";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import BackgroundPage from "./pages/BackgroundPage";
import LoginPage from "./pages/Login/Login/LoginPage";
import HomePage from "./pages/Homepage/HomePage";
import SideNavigation from "./pages/Homepage/components/SideNavigation";
import ProfilePage from "./pages/Profile/ProfilePage";
import RegistrationPage from "./pages/Login/Registration/RegistrationPage";
import { useSelector } from "react-redux";

function App() {
  return (
    <Switch>
      <BackgroundPage>
        <Routes>
          <Route path="/" index element={<LoginPage />} />
          <Route path="/new-user" index element={<RegistrationPage />} />{" "}
          <Route path="/" index element={<LoginPage />} />
          <Route path="/new-user" index element={<RegistrationPage />} />
          <Route path="/home" index element={<HomePage />} />
          <Route path="/profile" index element={<HomePage />} />
          <Route path="/notifications" index element={<HomePage />} />
        </Routes>
      </BackgroundPage>
    </Switch>
  );
}

export default App;
