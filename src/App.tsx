import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import DashboardScreen from "./pages/DashboardScreen";
import Layout from "./components/Layout/layout";
import MealPlanner from "./pages/MealPlanner";
import DietiansScreen from "./pages/DietiansScreen";
import ProgressScreen from "./pages/ProgressScreen";
import IngredientOptimizer from "./pages/IngredientOptimizer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-in" element={<LoginScreen />} />
        <Route path="/sign-up" element={<RegisterScreen />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/substitutions" element={<IngredientOptimizer />} />
          <Route path="/dietians" element={<DietiansScreen />} />
          <Route path="/progress" element={<ProgressScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
