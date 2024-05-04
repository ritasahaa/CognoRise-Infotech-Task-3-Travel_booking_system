import Home from "./Home";
import Description from "./Description";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentTrip from "./RecentTrip";

const App = () => {

  return (
    <>
      <Navbar />
      <Description />
      <Home />
      <RecentTrip />
    </>
  );
}

export default App;
