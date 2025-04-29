import { GlobalStyle } from "../global/global.style";
import { Header } from "./components/header";
import { Canecas } from "./pages/canecas";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Canecas />
    </>
  );
}

export default App;
