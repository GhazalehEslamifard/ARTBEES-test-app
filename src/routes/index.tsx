import { Route, Routes } from "react-router-dom";

import BiographyPage from "../pages/biography";
import BuilderPage from "../pages/builder";
import ContentPage from "../pages/content";

function ApplicationRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<BuilderPage />} />
      <Route path="/content" element={<ContentPage />} />
      <Route path="/biography" element={<BiographyPage />} />
    </Routes>
  );
}
export default ApplicationRoutes;
