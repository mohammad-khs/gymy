import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import Auth from "./pages/auth/auth";
import Goals from "./pages/goals/goals";
import GenderSelection from "./pages/gender_selection/genderSelection";
import MainGoal from "./pages/goals/mainGoal";
import BodyDescription from "./pages/goals/bodyDescription";
import CustomParticles from "./pages/customParticles";
import DreamBody from "./pages/goals/dreamBody";
import TargetZones from "./pages/goals/target_zone/targetZones";
import WhatToImprove from "./pages/goals/what_to_improve/whatToImprove";
import Fitness from "./pages/fitness/fitness";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//   },
//   {
//     path: "/genderSelection",
//     element: <GenderSelection />,
//   },
//   {
//     path: "/genderSelection/goals",
//     element: <Goals />,
//   },
//   {
//     path: "/genderSelection/goals/mainGoal",
//     element: <MainGoal />,
//   },
//   {
//     path: "/genderSelection/goals/bodyDescription",
//     element: <BodyDescription/>,
//   },

// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <CustomParticles />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/genderSelection" element={<GenderSelection />} />
        <Route path="/goals">
          <Route index element={<Goals />} />
          <Route path="mainGoal" element={<MainGoal />} />
          <Route path="bodyDescription" element={<BodyDescription />} />
          <Route path="dreamBody" element={<DreamBody />} />
          <Route path="targetZones" element={<TargetZones />} />
          <Route path="whatToImprove" element={<WhatToImprove />} />
        </Route>
        <Route path="fitness">
          <Route index element={<Fitness />} />
        </Route>
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
  </BrowserRouter>
);
