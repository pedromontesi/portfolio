import { Footer } from "./src/components/Footer";
import { Header } from "./src/components/Header/index";
// import { Container } from "./src/components/Container";


export function App() {
  return (
    <>
      <Header logo="logo" item1="Sobre" item2="Experiência" item3="Contato" />
      <div className="text-white flex flex-col flex-wrap justify-start mr-8 ml-8 mb-8 bg-neutral-950 p-8 rounded-3xl">
        <Footer item1="Sobre" item2="Experiência" item3="Contato" />
      </div>
    </>
  );
}