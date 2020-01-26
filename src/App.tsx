import React from "react";
import Header from "./components/Header";
import RowList from "./components/RowList";
import InfiniteList from "./components/InfiniteList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <InfiniteList initialDataRequestLink="https://reqres.in/api/users" />
    </div>
  );
};

export default App;
