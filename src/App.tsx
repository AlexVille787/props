import Listing from "./components/Listing/Listing";
import data from "./data/data.json";
import { ListingItem } from "./types";
import "./App.css";

function App() {
  const items = data as ListingItem[];

  return (
    <div className="App">
      <h1>Список предложений</h1>
      <Listing items={items} />
    </div>
  );
}

export default App;
