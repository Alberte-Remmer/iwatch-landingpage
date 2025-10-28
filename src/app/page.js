import Image from "next/image";
import Navy from "../../public/navy.png";
import DummyComponent from "./components/DummyComponent";

export default function Home() {
  return (
    <div className="grid-container">
      <DummyComponent />
      <Image src={Navy} alt="Navy watch" width={500} height={500} />
    </div>
  );
}
