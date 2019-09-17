import React ,{useState ,useEffect}  from "react";

import Table from 'react-bootstrap/Table'

import axios from 'axios';


<<<<<<< HEAD
function Author() {

   const [author ,setAuthor] = useState([])
    
   const fetchAuthor = async () => {
       await axios.get(`http://libra-cek.herokuapp.com/API/Authors/`)
=======
class Author extends Component {
    constructor(){
        super()
        this.state = {
            author : []
        }
    }
    componentDidMount() {
        axios.get(`https://libra-cek.herokuapp.com/API/Authors/`)
>>>>>>> d4aacbd0ce115b1feffe014fc75d4258237968df
      .then(res => {
        const author = res.data;
        setAuthor( author );
      })};
      useEffect(()=> {fetchAuthor(author)},[author])
    return(
        <div className="container">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  {author.map((author) => (
  <tbody>
    <tr>
      <td>{author.id}</td>
      <td>{author.first_name}</td>
      <td>{author.last_name}</td>
    </tr>
  </tbody>
  ))
  }
</Table>
</div>
    );
};


export default Author;
