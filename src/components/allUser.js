import React  from "react";
import {useState , useEffect} from "react";

import Table from 'react-bootstrap/Table'

import axios from 'axios';


function allUser(){
    const [user ,setUser] = useState([])
    
    const fetchUser = async () => {
        await axios.get(`https://libra-cek.herokuapp.com/API/Users/`)
       .then(res => {
         const user = res.data;
         setUser( user );
       })};
       useEffect(()=> {fetchUser(user)},[user])
     return(
         <div className="content">
             <Table striped bordered hover>
   <thead>
     <tr>
       <th>#</th>
       <th>First Name</th>
       <th>Last Name</th>
     </tr>
   </thead>
   {user.map((user) => (
   <tbody>
     <tr>
       <td>{user.id}</td>
       <td>{user.Name}</td>
       <td>{user.Department}</td>
     </tr>
   </tbody>
   ))
   }
 </Table>
 </div>
        );

}

export default allUser;
