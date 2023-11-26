import './App.css';
import Row from './Row';
import Requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (

    <div className="App">
      <Nav/>
      <div className='Banner'>
      <Banner/>
      </div>
        <Row title="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow={true} />
        <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
