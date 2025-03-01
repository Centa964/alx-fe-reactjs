import {Router} from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <AddRecipeForm />
      <RecipeList />
      <Router>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe" element={<RecipeDetails />} />
      </Router>
    </>
  );
}

export default App;