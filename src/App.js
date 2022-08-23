import "./App.css";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row";
import requests from "./request";
import Nav from "./Components/Nav/Nav.jsx"

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLEX ORIGINAL" fetchUrl={requests.fetchNetflexOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

//https://netflexclone-74c54.firebaseapp.com/