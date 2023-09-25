import PopularProduct from "./Section/PopularProduct";
import SuperQuality from "./Section/SuperQuality";
import Service from "./Section/Service";
import SpecialOffer from "./Section/SpecialOffer";
import CustomerReview from "./Section/CustomerReview";
import Subscribe from "./Section/Subscribe";
import Footer from "./Section/Footer";
import Navbar from "./assets/Components/Navbar";
export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">hero</section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        {" "}
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x xl:py-32 py-16 w-full ">
        <Subscribe />
      </section>
      <section className="padding bg-black text-white">
        <Footer />
      </section>
    </main>
  );
}
