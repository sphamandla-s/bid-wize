import IndexNavbar from "@/components/IndexNavbar";
import Hero from "../components/Hero";
import { Categories } from "@/components/Categories";
import LiveAuction from "@/components/LiveAuction";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-black">
      <IndexNavbar />
      <Hero />
      <Categories />
      <LiveAuction />
      <Testimonials />
    </main>

  );
}
