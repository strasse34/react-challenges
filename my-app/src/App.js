import css from "./App.module.css";

import Nesting from "./components/Nesting";

function App() {
  return (
    <div className={css.App}>
      <Nesting />
    </div>
  );
}

export default App;
