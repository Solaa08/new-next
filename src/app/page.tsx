import Button from "./nectron/Button";
import Form from "./nectron/Form";
import Input from "./nectron/Input";
import Label from "./nectron/Label";
import {Table, TableHeader, TableCell, TableRow} from "./nectron/Table/index"
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

import { VARIANT } from "./nectron/variant";
import OnTop from "./nectron/OnTop";
import { createGame } from "./lib/actions";
import { SubmitButton } from "./nectron/SubmitButton";

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
        <SubmitButton/>
        <Button variant={VARIANT.DANGER} outline>Annuler la création <AiOutlineClose size={18}/></Button>
      </Form>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              ID
            </TableHeader>
            <TableHeader>
              Nom
            </TableHeader>
            <TableHeader>
              Date de sortie
            </TableHeader>
            <TableHeader>
              Etat
            </TableHeader>
            <TableHeader>
            </TableHeader>
            <TableHeader>
              Modifications
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
            <TableRow>
                <TableCell>
                  00001
                </TableCell>
                <TableCell>
                  Dwarfs Fight
                </TableCell>
                <TableCell>
                  04 Sept 2019
                </TableCell>
                <TableCell>
                  <Button variant={VARIANT.SUCCESS}>Déployé</Button>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                  <Button variant={VARIANT.DANGER}>1</Button>
                  <Button variant={VARIANT.PRIMARY}>2</Button>
                </TableCell>
              </TableRow>
            </tbody>
      </Table>
    </main>
  );
}

