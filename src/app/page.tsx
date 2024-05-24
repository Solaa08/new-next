import Button from "./nectron/Button";
import { Table, TableHeader, TableCell, TableRow } from "./nectron/Table/index"
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { VARIANT } from "./nectron/variant";
import TableHeaderRow from "./nectron/Table/TableHeaderRow";
import TableHead from "./nectron/Table/TableHead";
import TableBody from "./nectron/Table/TableBody";
import ButtonIcon from "./nectron/ButtonIcon";

export default function Home() {
  return (
    <main className="flex bg-bg min-h-screen flex-col items-center justify-between p-24 text-sm">
      <Table>
        <TableHead>
          <TableHeaderRow>
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
          </TableHeaderRow>
        </TableHead>
        <TableBody>
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
                  <ButtonIcon variant={VARIANT.DANGER} className="text-white"><FaTrash size={22}/></ButtonIcon>
                  <ButtonIcon variant={VARIANT.PRIMARY}><MdModeEditOutline size={22}/></ButtonIcon>
                </TableCell>
              </TableRow>
            </TableBody>
      </Table>
    </main>
  );
}

