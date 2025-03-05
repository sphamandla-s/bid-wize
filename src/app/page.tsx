import IndexNavbar from "@/components/IndexNavbar";
import Hero from "../components/Hero";
import { Categories } from "@/components/Categories";

export default function Home() {
  return (
    <main className="bg-black">
      <IndexNavbar />
      <Hero />
      <Categories />
    </main>

  );
}
