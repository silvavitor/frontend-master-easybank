import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div className="bg-[--dark-blue]">
      <Header />
      <About />
      <WhyUs />
      <Articles />
      <Footer />
    </div>
  )
}
