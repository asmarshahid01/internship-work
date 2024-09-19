import React, { useState, useEffect } from 'react'
import Table from '../components/Table.js'
import {faker} from '@faker-js/faker'
import { createColumnHelper } from '@tanstack/react-table'
import './css/Dashboard.css'
import SearchBar from '../components/SearchBar.js'
import Navbar from '../components/Navbar.js'
import SideBar from '../components/SideBar.js'

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

  const [users, setUsers] = useState([...Array(10)].map(()=>({
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})));

const [searchTxt, setSearchTxt] = useState('');
const [data, _setData] = React.useState(() => [...users]);
const range = 5;
const [startVal, setStartVal] = useState(0);
const [showSidebar, setShowSidebar] = useState(false);
const [addEntryState, setAddEntryState] = useState({});

  useEffect(() => {
    const handleUsers = () => {
      const filtered = users.filter((user) =>
        user['username'].toLowerCase().includes(searchTxt.toLowerCase()) ||
        user['email'].toLowerCase().includes(searchTxt.toLowerCase()) ||
        user['password'].toLowerCase().includes(searchTxt.toLowerCase())
      );
      _setData(filtered.slice(startVal, startVal+range));
    };

    handleUsers();
  }, [searchTxt]);

  useEffect(() => {
    const currentUsers = users.slice(startVal, startVal+range)
    _setData(currentUsers);
  }, [startVal]);

  const handleAddEntryChange = (e) => {
    setAddEntryState({...addEntryState, [e.target.name]: e.target.value})
  }

  const handleAddEntry = () => {
    const new_entry = {
      username: addEntryState.uname,
      email: addEntryState.email,
      password: addEntryState.pword
    };
    setUsers([new_entry, ...users]);
    const currentUsers = users.slice(startVal, startVal+range)
    _setData(currentUsers);
  }


return (
        <div id='dashboard'>
            <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}></Navbar>
            {showSidebar && <SideBar></SideBar>}
            <div id='table-container'>
                <h1 id='dashboard-heading'>Dashboard.</h1>
                <div id='search-container'>
                    <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt}></SearchBar>
                </div>
                <div id='add-entry-container'>
                  <input id='add-entry-uname' type='text' placeholder='username' name='uname' value={addEntryState.uname} onChange={handleAddEntryChange} required></input>
                  <input id='add-entry-email' type='email' placeholder='email' name='email' value={addEntryState.email} onChange={handleAddEntryChange} required></input>
                  <input id='add-entry-pass' type='text' placeholder='password' name='pword' value={addEntryState.pword} onChange={handleAddEntryChange} required></input>
                  <button id='add-entry-btn' onClick={handleAddEntry}>Add</button>
                </div>
                <Table data={data} _setData={_setData} columns={columns}></Table>
                <div id='pagination-container'>
                    <p id='prev-btn' onClick={()=>startVal>0 && setStartVal(startVal-range)}>Prev</p>
                    <p>Showing {startVal + 1}-{startVal + range}/{users.length}</p>
                    <p id='next-btn' onClick={()=>startVal+range<users.length && setStartVal(startVal+range)}>Next</p>
                </div>
            </div>
        </div>
      )
}