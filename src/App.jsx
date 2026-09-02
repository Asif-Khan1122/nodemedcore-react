import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import StatsSection from "./components/StatsSection/StatsSection";
import Services from "./components/Services/Services";
import HowItWorksSection from "./components/Howitworks/HowItWorksSection";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <StatsSection />
      <Services />
      <HowItWorksSection />
    </>
  );
}

export default App;
