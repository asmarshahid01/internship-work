import React from 'react'
import {faker} from '@faker-js/faker'
import Table from './Table'

const users = [...Array(10)].map(()=>({
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password()
}))

export default function Dashboard () {
  const [data, _setData] = React.useState(() => [...users])

return (
        <div className="p-2">
          <Table data={data} _setData={_setData}></Table>
        </div>
      )
}