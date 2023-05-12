import AppHeader from "../../components/app-header/app-header";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

function IngredientPage () {
  return (
    <div>
      <AppHeader />
      <main className="mt-20">
        <IngredientDetails />
      </main>
    </div>
  )
}

export default IngredientPage;