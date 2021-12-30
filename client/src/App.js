import React from "react";
import { Layout } from "antd";
import FooterContent from "./components/footer-content/footer-content";
import MainContent from "./components/main-content/main-content";
import HeaderContent from "./components/header-content/header-content";

import './App.css'

class App extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({users}))
  }

  render() {
    return (
        <Layout>
            <HeaderContent />
            <MainContent />
            <FooterContent />
        </Layout>
    );
  }
}

export default App;
