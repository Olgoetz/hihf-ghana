import Navbar from "@/components/navbar";
import Header from "./_components/header";
import Projects from "./_components/projects";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <main>
      <Header />
      <Separator className="my-14" />
      <Projects />
    </main>
  );
}
