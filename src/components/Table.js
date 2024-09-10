import React from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import './css/Table.css'

export default function Table({ users, columns }) {
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
                    <td key={cell.id} className='table-entry'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                  <td><button onClick={() => {handleRemove(index)}}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}