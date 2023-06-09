import {
  Header,
  FormSection,
  NovoPigzdido,
  TudoQueVocePrecisa,
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
    </>
  );
}

export default App;
