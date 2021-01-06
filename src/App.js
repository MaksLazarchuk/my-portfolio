import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/Profile";
import Resume from "./pages/resume/Resume";
import Skills from "./pages/skills/Skills";
import Works from "./pages/works/Works";
import PageLayout from "./components/pageLayout/PageLayout";
import { Provider } from "./ModalContext";

const pages = [<Profile />, <Skills />, <Works />, <Resume />];
function App() {
  const [activePages, changeActivePages] = useState(0);
  const [isModalVisible, changeModalVisible] = useState(false);
  const toggle = () => changeModalVisible(!isModalVisible);

  return (
    <div className="layout">
      <Header changeActivePages={changeActivePages} activePages={activePages} />
      <PageLayout isModalVisible={isModalVisible}>
        <Provider value={toggle}>{pages[activePages]}</Provider>
      </PageLayout>
      <Footer toggle={toggle} isContactActive={isModalVisible} />
    </div>
  );
}

export default App;
