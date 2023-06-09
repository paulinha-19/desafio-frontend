import {
  Header,
  FormSection,
  NovoPigzdido,
  TudoQueVocePrecisa,
  Carousel,
  EMaisSuporte,
} from "./components/index";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FormSection />
      <NovoPigzdido />
      <TudoQueVocePrecisa />
      <Carousel />
      <EMaisSuporte />
    </>
  );
}

export default App;
