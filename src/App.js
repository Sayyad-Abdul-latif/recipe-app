import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Search />
        <Category />
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
