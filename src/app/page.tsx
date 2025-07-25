import { Banner } from "@/components/banner";
import { SobreMim } from "@/components/sobre-mim";
import { Habilidades } from "@/components/habilidades";
import { Contato } from "@/components/contato";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Banner />
      <SobreMim />
      <Habilidades />
      <Contato />
    </div>
  );
}
