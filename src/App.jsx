import './css/App.css'
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import FavoriteMovies from "./pages/Favorite.jsx";
import { MovieProvider } from './contexts/MovieContext.jsx';
import NavBar from "./componetns/NavBar.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/favorites" element={<FavoriteMovies />}></Route>
        </Routes>
      </main>
   </MovieProvider>
  )
}



export default App
