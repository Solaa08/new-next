import Button from "./nectron/Button";
import {Table, TableHeader, TableCell, TableRow} from "./nectron/Table/index"
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { VARIANT } from "./nectron/variant";

export default function Home() {
  return (
    <main className="flex bg-bg min-h-screen flex-col items-center justify-between p-24 text-sm">
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
                  <Button disabled variant={VARIANT.SUCCESS}>Déployé</Button>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                  <Button variant={VARIANT.DANGER} className="text-white"><FaTrash /></Button>
                  <Button variant={VARIANT.PRIMARY}><MdModeEditOutline size={16}/></Button>
                </TableCell>
              </TableRow>
            </tbody>
      </Table>
    </main>
  );
}

