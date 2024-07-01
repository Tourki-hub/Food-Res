import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Announcement from "./components/Announcement";
import Allcategory from "./pages/Allcategory";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/category" Component={Allcategory} />
      </Routes>
    </div>
  );
}

export default App;
