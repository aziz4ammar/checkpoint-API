import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
const getUsers=async()=>{
  const res=await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(res)
setUsers(res.data)
}
getUsers()
setLoading(false)
}, [])
 return (
<div className="App">
{
  loading?
  <h1>Loading...</h1>:
  users.map(el=><div>
    <h1>{el.name} </h1>
    <h2>{el.email} </h2>
  </div>)
}
    </div>
  );
}

export default App;
