import { Route, Routes } from "react-router-dom";
import { Landing, GetStarted } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Landing />} path="/landing" />
        <Route element={<GetStarted />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
