import React from 'react'
import Table from '../components/Table.js'
import {faker} from '@faker-js/faker'
import { createColumnHelper } from '@tanstack/react-table'

const users = [...Array(10)].map(()=>({
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}))

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('username', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.email, {
    id: 'email',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('password', {
    header: () => 'Password',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
]

export default function Dashboard () {

return (
        <div>
          <Table users={users} columns={columns}></Table>
        </div>
      )
}