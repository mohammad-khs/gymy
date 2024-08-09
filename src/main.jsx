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
import CustomParticles from "./pages/common_components/customParticles";
import DreamBody from "./pages/goals/dreamBody";
import TargetZones from "./pages/goals/target_zone/targetZones";
import WhatToImprove from "./pages/goals/what_to_improve/whatToImprove";
import Fitness from "./pages/fitness/fitness";
import TriedMethodsToLW from "./pages/fitness/tiredMethodsToLW";
import ExerciseXP from "./pages/fitness/exerciseXP";
import ExerciseRoutine from "./pages/fitness/exerciseRoutine";
import FeelUnmotivated from "./pages/fitness/feelUnmotivated";
import WorkoutTypes from "./pages/fitness/workoutTypes";
import RestorativePlans from "./pages/fitness/restorativePlans";
import WorkoutDays from "./pages/fitness/workoutDays";
import Profile from "./pages/profile/profile";
import TypicalDay from "./pages/profile/typicalDay";
import MealPreferences from "./pages/profile/mealPreferences";
import MealsADay from "./pages/profile/mealsADay";
import Habits from "./pages/profile/habits";
import YourAge from "./pages/profile/yourAge";
import SideActivities from "./pages/profile/sideActivities";
import YourHeight from "./pages/profile/yourHeight";
import YourWeight from "./pages/profile/yourWeight";
import HealthCycle from "./pages/healthCycle/healthCycle";
import MenstrualCycle from "./pages/healthCycle/menstrualCycle";
import PeriodDuration from "./pages/healthCycle/periodDuration";
import MenstrualCycleDuration from "./pages/healthCycle/menstrualCycleDuration";
import EffectsOnActivity from "./pages/healthCycle/effectsOnActivity";
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
          <Route path="triedMethodsToLW" element={<TriedMethodsToLW />} />
          <Route path="exerciseXP" element={<ExerciseXP />} />
          <Route path="exerciseRoutine" element={<ExerciseRoutine />} />
          <Route path="feelUnmotivated" element={<FeelUnmotivated />} />
          <Route path="workoutTypes" element={<WorkoutTypes />} />
          <Route path="restorativePlans" element={<RestorativePlans />} />
          <Route path="workoutDays" element={<WorkoutDays />} />
        </Route>
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="typicalDay" element={<TypicalDay />} />
          <Route path="mealPreferences" element={<MealPreferences />} />
          <Route path="mealsADay" element={<MealsADay />} />
          <Route path="habits" element={<Habits />} />
          <Route path="sideActivities" element={<SideActivities />} />
          <Route path="yourAge" element={<YourAge />} />
          <Route path="yourHeight" element={<YourHeight />} />
          <Route path="yourWeight" element={<YourWeight />} />

        </Route>
        <Route path="healthCycle">
          <Route index element={<HealthCycle />} />
          <Route path="menstrualCycle" element={<MenstrualCycle />} />
          <Route path="periodDuration" element={<PeriodDuration />} />
          <Route path="menstrualCycleDuration" element={<MenstrualCycleDuration />} />
          <Route path="effectsOnActivity" element={<EffectsOnActivity />} />
        </Route>
      </Routes>

      {/* <RouterProvider router={router} /> */}
    </React.StrictMode>
  </BrowserRouter>
);
