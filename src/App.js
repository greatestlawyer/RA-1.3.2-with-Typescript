import "./App.css";
import Stars from "./components/stars";
import Listing from "./components/Listing";
import data from "./data/etsy.json";

function App() {
  return (
    <div>
      <Stars count={3} />
      <Listing items={data} />
    </div>
  );
}

export default App;
