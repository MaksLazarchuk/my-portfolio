import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";
import Resume from "./pages/resume/Resume";
import Skills from "./pages/skills/Skills";
import Works from "./pages/works/Works";
import PageLayout from "./components/pageLayout/PageLayout";

const pages = [<Profile />, <Skills />, <Works />, <Resume />];
function App() {
  const [activePages, changeActivePages] = useState(0);

  return (
    <div className="layout">
      <Header changeActivePages={changeActivePages} activePages={activePages} />
      <PageLayout>{pages[activePages]}</PageLayout>
      <Footer />
    </div>
  );
}

export default App;
