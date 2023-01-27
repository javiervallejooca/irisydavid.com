import Intro from "./components/Intro";
import Donde from "./components/Donde";
import GoogleMap from "./components/GoogleMap/Index";
import Gamberros from "./components/Gamberros";
import Elora from "./components/Elora";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full h-full selection:bg-slate-200 selection:text-slate-800 relative font-chula">
        <Intro />
        <Donde />
        <GoogleMap />
        <Elora />
        <Gamberros />
      </div>
      <Footer />
    </>
  );
}

export default App;
