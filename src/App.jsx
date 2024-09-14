import React from "react";
import "./App.css"; // Ensure to include any global styles
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import RowList from "./Components/RowList/Rowlist";
import Footer from "./Components/Footer/Footer";
import Rows from "./Components/Rows/Row";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowList />
      <Footer />
      <Rows />
    </div>
  );
}

export default App;
