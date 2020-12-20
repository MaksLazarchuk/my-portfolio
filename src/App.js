import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";
import Resume from "./pages/resume/Resume";
import Skills from "./pages/skills/Skills";
import Works from "./pages/works/Works";

const pages = [<Profile />, <Skills />, <Works />, <Resume />];
function App() {
  const [activePages, changeActivePages] = useState(0);

  return (
    <div>
      <Header changeActivePages={changeActivePages} />
      {pages[activePages]}
      <Footer />
    </div>
  );
}

export default App;
