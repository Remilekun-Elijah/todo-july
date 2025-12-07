import "./App.css";
import Navbar, { Footer } from "./components/Navbar.jsx";
import TodosWrapper from "./components/TodosWrapper.jsx";

function App() {
  return (
    <main style={{ height: "100dvh", position: "relative" }}>
      <Navbar />
      <TodosWrapper />
      <Footer />
    </main>
  );
}

export default App;
