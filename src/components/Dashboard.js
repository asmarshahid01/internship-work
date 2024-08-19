import React from 'react'
import {faker} from '@faker-js/faker'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

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

    const [data, _setData] = React.useState(() => [...users])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })

    const handleRemove = (target) => {
        var newData = [...data]
        newData.splice(target, 1)
        _setData(newData)
        rerender()
    }

return (
        <div className="p-2">
          <table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                  <th></th>
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                  <td><button onClick={() => {handleRemove(index)}}>Remove</button></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
      )
}