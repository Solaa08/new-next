import Image from "next/image";
import Button from "./nectron/Button";
// import Input from "./nectron/Input";
import { VARIANT } from "./nectron/variant";
import {Input} from "@nextui-org/input";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24 text-sm">
      <Button variant={VARIANT.PRIMARY}>Valider</Button>
      <Button variant={VARIANT.SECONDARY}>Valider</Button>
      <Button variant={VARIANT.DANGER}>Valider</Button>
      <Button variant={VARIANT.WARNING}>Valider</Button>
      <Button variant={VARIANT.SUCCESS}>Valider</Button>
    </main>
  );
}
