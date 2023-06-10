import {
  Header,
  FormSection,
  NovoPigzdido,
  Carousel,
  SectionCardButton
} from "./components/index";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FormSection />
      <NovoPigzdido />
      <Carousel />
      <SectionCardButton/>
    </>
  );
}

export default App;
