import Contato from "./components/Contato";
import Habilidades from "./components/Habilidades";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <div>
    <Navbar />
    <Inicio />
    <SobreMim />
    <Habilidades />
    <Projetos />
    <Contato />
    </div>
  );
}

export default App;
