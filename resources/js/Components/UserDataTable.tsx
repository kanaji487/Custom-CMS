import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Button } from "./ui/button";

interface UserDataTableProps {
    users: { 
        id: number; 
        name: string; 
        email: string; 
        image: string;
        created_at: string;
        updated_at: string;
    }[];
}

export function UserDataTable({ users }: UserDataTableProps){

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Created at</TableHead>
                    <TableHead>Updated at</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">
                            {user.name}
                        </TableCell>
                        <TableCell className="font-medium">
                            {user.email}
                        </TableCell>
                        <TableCell className="font-medium">
                            {user.image}
                        </TableCell>
                        <TableCell className="font-medium">
                            {new Date(user.created_at).toLocaleString("th-TH", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "Asia/Bangkok"
                            })}
                        </TableCell>
                        <TableCell className="font-medium">
                            {new Date(user.updated_at).toLocaleString("th-TH", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "Asia/Bangkok"
                            })}
                        </TableCell>
                        <TableCell className="flex gap-4">
                            <Button className="bg-green-400 text-white">Create</Button>
                            <Button className="bg-red-500 text-white">Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}