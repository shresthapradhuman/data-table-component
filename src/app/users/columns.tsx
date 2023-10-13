"use client"

import { ColumnDef } from "@tanstack/react-table"


export type User = {
  id: string
  name: string
  email: string
  image: string
  lastSeen: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell:({row})=>{
      const name: string = row.getValue('name');
      return name.split(".").join(" ");
    }
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastSeen",
    header: "Last Seen",
    cell: ({row}) => {
      const date = new Date(row.getValue('lastSeen'))
      const formatted = date.toLocaleDateString()
      return <div className="font-medium">{formatted}</div>
    }
  },
]
