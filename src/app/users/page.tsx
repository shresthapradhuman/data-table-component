import { DataTable } from '@/components/data-table'
import React from 'react'
import { User, columns } from './columns'

async function getUsers(): Promise<User[]>{
  const response = await fetch('https://6528f0b455b137ddc83dece3.mockapi.io/api/users',{
    cache:"no-store"
  })
  const data = await response.json()
  return data
}

const Users = async() => {
  const users = await getUsers();
  return (
    <div className='py-24'>
        <div className='container'>
            <h1 className="text-3xl font-bold">
                All Users
            </h1>
            <DataTable columns={columns} data={users}/>
        </div>
    </div>
  )
}

export default Users