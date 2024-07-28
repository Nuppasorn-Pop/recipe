import "./App.css";
import header from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="container">
      <img src={header} />
      <div className="box-header">
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div className="box-prepare">
        <h4>Preparation time </h4>
        <li>
          <span>Total</span>: Approximately 10 minutes{" "}
        </li>
        <li>
          <span>Preparation</span>: 5 minutes{" "}
        </li>
        <li>
          <span>Cooking</span>: 5 minutes{" "}
        </li>
      </div>
      <div className="box-ingredients">
        <h2>Ingredients</h2>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </div>
      <hr />
      <div className="box-instructions">
        <h2>Instructions</h2>
        <ol>
          <li>
            <span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of
            salt and pepper until they are well mixed. You can add a tablespoon
            of water or milk for a fluffier texture.
          </li>
          <li>
            <span>Heat the pan</span>: Place a non-stick frying pan over medium
            heat and add butter or oil.
          </li>
          <li>
            <span>Cook the omelette</span>: Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li>
            <span>Add fillings (optional)</span>: When the eggs begin to set at
            the edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </li>
          <li>
            <span>Fold and serve</span>: As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li>
            <span>Enjoy</span>: Serve hot, with additional salt and pepper if
            needed.
          </li>
        </ol>
      </div>
      <hr />
      <div className="box-nutrition">
        <h2>Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <tr>
            <td>Calories</td>
            <td>
              {" "}
              <span>277kcal</span>
            </td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>
              {" "}
              <span>0g</span>
            </td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>
              {" "}
              <span>20g</span>
            </td>
          </tr>
          <tr>
            <td className="none-line">Fat</td>
            <td className="none-line">
              <span>22g</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;