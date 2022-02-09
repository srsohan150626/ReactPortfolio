import logo from './logo.svg';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavbar from "./components/TopNavbar/TopNavbar";

function App() {
  return (
    <div >
        <TopNavbar/>
      <TopBanner/>
        <Services/>
    </div>
  );
}

export default App;
