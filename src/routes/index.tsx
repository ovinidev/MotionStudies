import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Animation } from "../pages/Animation";
import { FigmaAnimation } from "../pages/FigmaAnimation";
import { GsapPage } from "../pages/GsapPage";
import { Scroll } from "../pages/Scroll";
import { Transform } from "../pages/Transform";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transform />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/figma" element={<FigmaAnimation />} />
        <Route path="/gsap" element={<GsapPage />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </BrowserRouter>
  );
}
