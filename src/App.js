import { BrowserRouter as Router, Route } from "react-router-dom";
import { Apod } from "./components/Apod";
import NasaPhoto from "./components/NasaPhoto";
import NavBar from "./components/NavBar";
import EarthEvents from "./components/EarthEvents";

function App() {
  return (
    <Router>
      <NavBar />

      <Route path="/" exact component={Apod} />
      <Route path="/nasaphoto">
        <NasaPhoto />
      </Route>
      <Route path="/earthEvents">
        <EarthEvents />
      </Route>
    </Router>
  );
}

export default App;
