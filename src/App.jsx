import { ComputerSection } from "./Components/ComputerSection";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <ComputerSection />
    </div>
  );
}

export default App;
