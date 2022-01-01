import { Layout } from "antd";
import FooterContent from "./components/footer-content/footer-content";
import MainContent from "./components/main-content/main-content";
import HeaderContent from "./components/header-content/header-content";

import './App.css'

const App = () => {
    return (
        <Layout>
            <HeaderContent />
            <MainContent />
            <FooterContent />
        </Layout>
    );
}

export default App;
