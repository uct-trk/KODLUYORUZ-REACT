import "./App.css";
import Card from "./components/Card";
import food from "./assets/food.jpg" // Tell webpack this JS file uses this image
import heartOutline from "./assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "./assets/heart-fill.png"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    noHeart:heartOutline,
    heart:heartFill,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const likeCount = 193;
  

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          food={recipeItem.image}
          desc={recipeItem.description}
          kalp={recipeItem.heart}
          noKalp={recipeItem.noHeart}
          baslik={recipeItem.title}
          tarih={recipeItem.date}
          begeni={likeCount}
        />
      </header>
    </div>
  );
}

export default App;

