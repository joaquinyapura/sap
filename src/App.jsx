import { Cards } from "./Components/Cards";
import { ComputerSection } from "./Components/ComputerSection";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Newsletter } from "./Components/Newsletter";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <ComputerSection />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
