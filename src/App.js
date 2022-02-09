import logo from './logo.svg';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Analysis from "./components/Analysis/Analysis";

function App() {
  return (
    <div >
        <TopNavbar/>
      <TopBanner/>
        <Services/>
        <Analysis/>
    </div>
  );
}

export default App;
