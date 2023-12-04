import "./App.css";
import Header from "./components/Header/Header";
import Lesson from "./components/Lesson Card/Lesson";
import { data } from "./Helper/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Lesson data={data} />
    </div>
  );
}

export default App;
