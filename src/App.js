import "./App.css";
import AppProvider from "./context/AppContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
