import { Link } from "react-router-dom";
import Router from "@/Components/Router";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Router />
    </>
  );
}

export default App;
