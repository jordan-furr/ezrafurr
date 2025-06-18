import Header from "./components/header";
import FullPortfolio from "./components/fullPortfolio";

export default async function Home() {
  
  return (
    <main>
      <div id="app">
        <Header />
        <FullPortfolio />
      </div>
    </main>
  );
}
