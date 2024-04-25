import Button from "@/components/button/Button";
import Footer from "@/components/footer/Footer";
import Hero1 from "@/components/hero/Hero1";
import Nav from "@/components/nav/Nav";
import Section from "@/components/section/Section";
import { roboto } from "@/utils/fonts";

export default function Home() {
  return (
    <main >
      <div>
        <Nav />
        <Hero1 />
        <Section />
        <div className="text-center">
          <Button className={`mx-4 w-72 h-14 md:${roboto.className}`} text="TRY IT FOR YOURSELF " />
        </div>
        <Footer />
      </div>
    </main>
  );
}
