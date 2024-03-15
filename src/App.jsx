import { Hero, PropertySearch, Trending, Invest, PartnerInfo, Raveum101, Newsletter, Footer } from './sections';
import UpdatedNav from './components/UpdatedNav';
const App = () => (
  <main className = "relative">
    <UpdatedNav/>
    <section className = "xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className = "padding">
      <PropertySearch/>
    </section>
    <section className = "padding">
      <Trending/>
    </section>
    <section className = "padding">
      <Invest/>
    </section>
    <section className = "padding">
      <PartnerInfo/>
    </section>
    <section className = "padding">
      <Raveum101/>
    </section>
    <section className = "padding">
      <Newsletter/>
    </section>
    <section className = "padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;