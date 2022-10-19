import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const Error = lazy ( () => import("./components/Error"));

function App() {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="/" element={<Homepage />}></Route> */}
        <Route path="/" element={<Error />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
