import Index from "./components/Index";
import "./components/ItemManager/styles.css";
import ComponentA from "./components/redux-test/ComponentA";
import ComponentB from "./components/redux-test/ComponentB";

function App() {
  return (
    <div>
      {/*<Login/>*/}
      {/*<Index/>*/}
        <ComponentA />
        <ComponentB />
    </div>
  );
}

export default App;
