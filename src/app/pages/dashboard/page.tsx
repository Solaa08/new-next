import Button from "@/app/nectron/Button";
import { Table, TableHeader, TableCell, TableRow } from "@/app/nectron/Table/index"
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { VARIANT } from "@/app/nectron/variant";
import ButtonIcon from "@/app/nectron/ButtonIcon";
import TableBody from "@/app/nectron/Table/TableBody";
import TableHead from "@/app/nectron/Table/TableHead";
import TableHeaderRow from "@/app/nectron/Table/TableHeaderRow";
import { getGames } from "@/app/lib/Table/actions";

export default async function Dashboard() {
  const games = await getGames();

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
        {games?.map((game: any) => (
            <TableRow>
                <TableCell>
                  {game.id}
                </TableCell>
                <TableCell>
                  {game.name}
                </TableCell>
                <TableCell>
                  {game.date_sortie}
                </TableCell>
                <TableCell>
                  <Button disabled variant={VARIANT.SUCCESS}>{game.state}</Button>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                  <ButtonIcon variant={VARIANT.DANGER} className="text-white"><FaTrash size={20}/></ButtonIcon>
                  <ButtonIcon variant={VARIANT.PRIMARY}><MdModeEditOutline size={20}/></ButtonIcon>
                </TableCell>
              </TableRow>
          ))}
            </TableBody>
      </Table>
    </main>
  );
}

