import React ,{useState , useEffect}  from "react";

function allUser(){
    const [User ,setUser] = useState([])
    
    const fetchUser = async () => {
        await axios.get(`https://libra-cek.herokuapp.com/API/Users/`)
       .then(res => {
         const User = res.data;
         setUser( User );
       })};
       useEffect(()=> {fetchUser(User)},[User])
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
   {author.map((aUser) => (
   <tbody>
     <tr>
       <td>{User.id}</td>
       <td>{User.Name}</td>
       <td>{User.Department}</td>
     </tr>
   </tbody>
   ))
   }
 </Table>
 </div>
        );

}

export default allUser;
