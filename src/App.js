import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
    constructor(){
        super();
        this.state = {
        currentPage: 'App',
        }
    }
  render() {
    return (
      <div id = "main-wrapper"> 
        <Header/>
        <div className = 'content'>
          <div className = {this.state.currentPage}>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
