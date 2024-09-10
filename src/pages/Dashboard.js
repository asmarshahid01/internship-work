import React from 'react'
import Table from '../components/Table.js'
import {faker} from '@faker-js/faker'
import { createColumnHelper } from '@tanstack/react-table'
import './css/Dashboard.css'

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
    header: () => "Username",
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.email, {
    id: 'email',
    cell: info => <i>{info.getValue()}</i>,
    header: () => "Email",
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
        <div id='dashboard'>
            <div id='table-container'>
                <h1 id='dashboard-heading' contentEditable>Dashboard.</h1>
                <Table users={users} columns={columns}></Table>
            </div>
        </div>
      )
}