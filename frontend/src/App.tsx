import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import NotificationButton from "./components/NotificationButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-conteiner">
            <SectionCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
