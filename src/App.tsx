import React from "react";
import Header from "./components/Header";
import InfiniteList from "./components/InfiniteList";
import LoadingScreen from "./pages/LoadingScreen";

const App: React.FC = () => {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/loader") return <LoadingScreen />;
    return (
      <>
        <Header />
        <InfiniteList initialDataRequestLink="https://reqres.in/api/users" />
      </>
    );
  }

  return <div className="App">{getPage()}</div>;
};

export default App;
