import logo from './logo.svg';
import './App.css';
import CricBuzz from "./CricBuzz";
import News from './News';

function App() {
  return (
    <div className="App">
      <CricBuzz  className="card1" imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c503321/will-us-burst-south-africas-b.jpg"
      p1="ICC MEN'S T20 WORLD CUP 2024"
      a="https://www.cricbuzz.com/cricket-news/130782/will-us-burst-south-africas-batting-blues-bubble"
      h2="Will US burst South Africa's batting blues bubble?"
      p2="USA may have been the surprise qualifiers to the Super 8s, but they would look to surprise the wobbly but dangerous batting might of the Aiden Markram-led side"
      ></CricBuzz>
      <CricBuzz className="card2" imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c503323/barbados-data-watch-more-runs.jpg"
      p1="ICC MEN'S T20 WORLD CUP 2024"
      a="https://www.cricbuzz.com/cricket-news/130785/barbados-data-watch-more-runs-and-better-returns-for-pace"
      h2="Barbados data watch: More runs and better returns for pace"
      p2="T20 data for the famous venue in Bridgetown, where India take on Afghanistan, is at odds with the grounds elsewhere in the Caribbean"
      ></CricBuzz>
      <CricBuzz className="card3" imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c503322/williamson-turns-down-nz-centr.jpg"
      p1="NEW ZEALAND CENTRAL CONTRACTS"
      a="https://www.cricbuzz.com/cricket-news/130784/williamson-turns-down-nz-central-contract"
      h2="Williamson turns down NZ central contract"
      p2="The 33-year-old has reaffirmed his commitment to NZ cricket but at the same time has let go of captaincy as well"
      ></CricBuzz>

      <CricBuzz className="card4" imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c503315/gambhir-amongst-contenders-int.jpg"
      p1="INDIA HEAD COACH"
      a="https://www.cricbuzz.com/cricket-news/130780/gambhir-amongst-contenders-interviewed-for-india-coach-role"
      h2="Gambhir amongst contenders interviewed for India coach role"
      p2="The former India captain recently mentored Kolkata Knight Riders to an IPL title"
      ></CricBuzz>

      <CricBuzz className="card5" imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c503326/west-indies-start-as-favourite.jpg"
      p1="ICC MEN'S T20 WORLD CUP 2024"
      a="https://www.cricbuzz.com/cricket-news/130787/west-indies-start-as-favourites-against-jittery-england"
      h2="West Indies start as favourites against jittery England"
      p2="While England didn't have a smooth sailing into the Super 8s, West Indies are unbeaten in the tournament"
      ></CricBuzz>

      

      {/* <News imgLink="https://static.cricbuzz.com/a/img/v1/420x235/i1/c503321/will-us-burst-south-africas-b.jpg" 
      p1="ICC MEN'S T20 WORLD CUP 2024"
      alink="https://www.cricbuzz.com/cricket-news/130782/will-us-burst-south-africas-batting-blues-bubble"
       h1="Will US burst South Africa's batting blues bubble?"
       p2="USA may have been the surprise qualifiers to the Super 8s, but they would look to surprise the wobbly but dangerous batting might of the Aiden Markram-led side"></News> */}

      

    </div>
  );
}

export default App;
