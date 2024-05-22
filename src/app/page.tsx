
import Button from "./nectron/Button";
import Form from "./nectron/Form";
import Input from "./nectron/Input";
import Label from "./nectron/Label";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

import { VARIANT } from "./nectron/variant";
import OnTop from "./nectron/OnTop";
import { createGame } from "./lib/actions";

export default function Home() {
  return (
    <main className="flex bg-bg min-h-screen flex-col items-center justify-between p-24 text-sm">
      <Form action={createGame} className="w-[480px] box-content">
        <h2 className="text-dark text-5xl font-bold text-center">Création d’un jeu</h2>
        <Label>
          <OnTop>Nom du jeu</OnTop>
          <Input name="name" />
        </Label>
        <Label>
          <OnTop>Etat du jeu</OnTop>
          <Input name="state" />
        </Label>
        <Button variant={VARIANT.SECONDARY}>Continuer <AiOutlineRight size={18}/></Button>
        <Button variant={VARIANT.DANGER} outline>Annuler la création <AiOutlineClose size={18}/></Button>
      </Form>
    </main>
  );
}
