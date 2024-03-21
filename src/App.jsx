import {
  Hero,
  PropertySearch,
  Trending,
  Invest,
  PartnerInfo,
  Raveum101,
  Newsletter,
  Footer,
} from "./sections";
import UpdatedNav from "./components/UpdatedNav";
const App = () => (
  <main className="relative">
    <UpdatedNav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PropertySearch />
    </section>
    <section className="padding">
      <Trending />
    </section>
    <section className="padding">
      <Invest />
    </section>
    <section className="padding">
      <PartnerInfo />
    </section>
    <section className="padding">
      <Raveum101 />
    </section>
    <section className="sm:px-16 px-8 pb-16">
      <Newsletter />
    </section>
    <section className="bg-[#f5f8ff] padding-x pb-8">
      <Footer />
    </section>
    <p className="font-nunito text-sm py-4 flex text-center justify-center">
      Copyright © Raveum 2024. Crafted to house investing
    </p>
  </main>
);

export default App;
