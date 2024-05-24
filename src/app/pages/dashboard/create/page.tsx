import Button from "@/app/nectron/Button";
import { VARIANT } from "@/app/nectron/variant";
import Form from "@/app/nectron/Form";
import Input from "@/app/nectron/Input";
import Label from "@/app/nectron/Label";
import OnTop from "@/app/nectron/OnTop";
import { createGame } from "@/app/lib/actions";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
    
export default function Create() {
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

