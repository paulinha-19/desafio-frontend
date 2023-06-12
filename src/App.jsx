import {
  Header,
  FormSection,
  NovoPigzdido,
  Carousel,
  SectionCardButton,
  Footer,
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
      <SectionCardButton />
      <Footer />
    </>
  );
}

export default App;
