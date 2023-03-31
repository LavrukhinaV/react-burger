import AppHeader from "../app-header/app-header"
import Main from "../main/main";
import appStyles from "./app.module.css";

function App() {
  return (
    <div className="page text text_type_main-default">
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
