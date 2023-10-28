import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import MainNav from './components/navbar';
import MainFooter from './components/footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import YogaPage from './Pages/Yoga_Page';
import Home from './Pages/HomePage';
import Meditation from './Pages/MeditationHomePage';
import GuidedMeditation from './Pages/GuidedMed';
import MusicMeditation from './Pages/MusicMed';
import Books from './Pages/BooksPage';
import BlogsPage from './Pages/BlogsPage';
import PostBlog from './Pages/BlogForm'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import TherapistsPage from './Pages/TherapistsPage';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <Router style={{position:"relative"}}>
    <div className="App">
      <MainNav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/yoga' element={<YogaPage />} />
      <Route path='/meditation' element={<Meditation/>} />
      <Route path='/meditation/guided' element={<GuidedMeditation/>}/>
      <Route path='/meditation/music' element={<MusicMeditation />}/>
      <Route path='/books' element={<Books />}/>
      <Route path='/blogs' element={<BlogsPage />} />
      <Route path='/blogs/blogForm' element={<PostBlog />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/appointments' element={<TherapistsPage />} />
      <Route path='/aboutus' element={<AboutUs />} />
      </Routes>

      <MainFooter />
    </div>
    </Router>
  );
}

export default App;
