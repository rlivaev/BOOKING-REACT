
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Hotel from "./pages/hotel/Hotel.jsx";
import List from "./pages/list/List.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = { <Home/> }/>
          <Route path="/hotels" element = {<List/>}/>
          <Route path="/hotel/:id" element = {<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
