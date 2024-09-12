import React, { useEffect, useState } from 'react'
import Table from '../components/Table.js'
import { faker } from '@faker-js/faker'
import { createColumnHelper } from '@tanstack/react-table'
import './css/Dashboard.css'
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Searchbar from '../components/Searchbar.js'
import AddEntry from '../components/AddEntry.js'

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
  const [searchTxt, setSearchTxt] = useState('');
  const [data, _setData] = React.useState(() => [...users]);
  const range = 5;
  const [startVal, setStartVal] = useState(0);
  const [showSideabr, setShowSidebar] = useState(false);
  const [showAddEntry, setShowAddEntry] = useState(false);

  useEffect(()=>{
    const handleUsers = () => {
      const filtered = users.filter((user) => 
      user['username'].toLowerCase().includes(searchTxt.toLowerCase()) ||
      user['email'].toLowerCase().includes(searchTxt.toLowerCase()) ||
      user['password'].toLowerCase().includes(searchTxt.toLowerCase()));

      _setData(filtered.slice(startVal, startVal+range));
    };

    handleUsers();
  },[searchTxt]);

  useEffect(()=>{
    const currentUsers = users.slice(startVal, startVal+range);
    _setData(currentUsers);
  },[startVal]);

return (
        <div id='dashboard'>
          <Navbar showSideabr={showSideabr} setShowSidebar={setShowSidebar}></Navbar>
          {showSideabr && <Sidebar></Sidebar>}
            <div id='table-container'>
                <h1 id='dashboard-heading'>Dashboard.</h1>
                <div id='search-container'>
                  <Searchbar searchTxt={searchTxt} setSearchTxt={setSearchTxt}></Searchbar>
                  <div id='add-btn' onClick={()=>setShowAddEntry(true)}>Add <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                    <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path></svg>
                  </div>
                </div>
                <Table data={data} _setData={_setData} columns={columns}></Table>
                <div id='pagination-container'>
                  <p id='prev-btn' onClick={()=>startVal>0 && setStartVal(startVal-range)}>Prev</p>
                  <p>Showing {startVal+1}-{startVal+range < data.length ? startVal+range : data.length}/{users.length}</p>
                  <p id='next-btn' onClick={()=>startVal+range<users.length && setStartVal(startVal+range)}>Next</p>
                </div>
            </div>
            {showAddEntry && <AddEntry setShowAddEntry={setShowAddEntry}></AddEntry>}
        </div>
      )
}