import { Route, Routes } from "react-router-dom";

import BuilderPage from "../pages/builder";

export function ApplicationRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<BuilderPage />} />
      <Route path="/content" element={<BookList />} />
      <Route path="/biography" element={<BookList />} />
    </Routes>
  );
}
export default ApplicationRoutes;
