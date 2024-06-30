import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Announcement from "./components/Announcement";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </div>
  );
}

export default App;
