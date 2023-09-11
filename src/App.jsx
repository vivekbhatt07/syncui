import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  AlertPage,
  AvatarPage,
  BadgePage,
  ButtonPage,
  CardPage,
  GetStartedPage,
  HeadingPage,
  LandingPage,
  LinkPage,
  TextPage,
} from "./pages";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<GetStartedPage />} path="/" />
        <Route element={<LandingPage />} path="/landing" />
        <Route element={<AlertPage />} path="/alert" />
        <Route element={<AvatarPage />} path="/avatar" />
        <Route element={<BadgePage />} path="/badge" />
        <Route element={<ButtonPage />} path="/button" />
        <Route element={<CardPage />} path="/card" />
        <Route element={<HeadingPage />} path="/heading" />
        <Route element={<LinkPage />} path="/link" />
        <Route element={<TextPage />} path="/text" />
      </Routes>
    </div>
  );
};

export default App;
