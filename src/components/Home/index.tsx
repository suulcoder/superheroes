import Header from '../Header';
import Liked from '../Liked';
import Navbar from '../Navbar';
import Superheroes from '../Superheroes';
import './index.css';

function Home() {
    return (
      <div className="Home">
        <Header/>
        <Liked/>
        <Superheroes/>
        <Navbar/>
      </div>
    );
  }
  
export default Home;
  