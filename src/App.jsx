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
  ImagePage,
} from "./pages";

const App = () => {
  return (
    <div className="app">
      <Routes>
        {/* <Route element={<GetStartedPage />} path="/" />
        <Route element={<LandingPage />} path="/" /> */}
        <Route element={<AlertPage />} path="/" />
        <Route element={<AvatarPage />} path="/avatar" />
        <Route element={<BadgePage />} path="/badge" />
        <Route element={<ButtonPage />} path="/button" />
        <Route element={<CardPage />} path="/card" />
        <Route element={<HeadingPage />} path="/heading" />
        {/* <Route element={<LinkPage />} path="/link" /> */}
        <Route element={<TextPage />} path="/text" />
        <Route element={<ImagePage />} path="/image" />
      </Routes>
    </div>
  );
};

export default App;
