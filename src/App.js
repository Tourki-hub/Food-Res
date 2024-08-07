import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Announcement from "./components/Announcement";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./Context/userContext";
import Allcategory from "./pages/Allcategory";
import Profile from "./pages/Profile";
import allrecipes from "./pages/allrecipes";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="h-screen flex flex-col">
        <Announcement />
        <NavBar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/Allcategory" Component={Allcategory} />
          <Route path="/profile" Component={Profile} />
          <Route path="/all" Component={allrecipes} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
