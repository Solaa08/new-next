import Button from "@/app/nectron/Button";
import { Table, TableHeader, TableCell, TableRow } from "@/app/nectron/Table/index"
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { VARIANT } from "@/app/nectron/variant";
import ButtonIcon from "@/app/nectron/ButtonIcon";
import TableBody from "@/app/nectron/Table/TableBody";
import TableHead from "@/app/nectron/Table/TableHead";
import TableHeaderRow from "@/app/nectron/Table/TableHeaderRow";


export default function Dashboard() {
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
              état
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
                  <ButtonIcon variant={VARIANT.DANGER} className="text-white"><FaTrash size={20}/></ButtonIcon>
                  <ButtonIcon variant={VARIANT.PRIMARY}><MdModeEditOutline size={20}/></ButtonIcon>
                </TableCell>
              </TableRow>
            </TableBody>
      </Table>
    </main>
  );
}

