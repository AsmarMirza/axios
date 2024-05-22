
import { useEffect } from 'react';
import './App.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';
function App() {

  Swal.fire('Hello world!');
 

  Swal.fire({
    title: 'omg!',
    text: 'you are creative',
    icon: 'success'
  });

  
  const [users, setUsers] = useState([])
  const Url="http://localhost:3000/users"
  useEffect(() => {
    getAllUsers()
    getUser(1)
    // const newUser={
    //   "name":"salam",
    //   "age":34,
    //   "job":"sbhhwer"
    // }
    // postUser(newUser)
    // updateUser("3a71",{
    //   "name":"guys",
    //   "age":123,
    //   "job":"errtg"
    // })
    // deleteUser("7581")
  }, [])

  async function getAllUsers(){
    const res= await axios.get(Url)
    setUsers(res.data)
    console.log(res.data);
  }

  async function getUser(id){
    const res=await axios.get(`${Url}/`+id)
    console.log(res.data);
  }

async function postUser(newUser){
  const res=await axios.post(`${Url}`,newUser)
  console.log(res.data);
}

async function updateUser(id,user){
  const res=await axios.put(`${Url}/`+id,user)
  console.log(res.data);
}

async function deleteUser(id){
  const res=await axios.delete(`${Url}/`+id)
  console.log(res.data);
  await getAllUsers()
}
  
  return (
    <>
 {users.map((x)=>(
   <div style={{border:"1px solid black"}} key={x.id}>

   <h1>{x.name}</h1>
   <p>{x.job}</p>
   <p>{x.age}</p>
   <button onClick={()=>deleteUser(x.id)}>delete</button>
   </div>
  ))}
    </>
  )
}

export default App
