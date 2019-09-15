import React ,{ Component} from "react";

import Table from 'react-bootstrap/Table'

import axios from 'axios';


class Author extends Component {
    constructor(){
        super()
        this.state = {
            author : []
        }
    }
    componentDidMount() {
        axios.get(`http://libra-cek.herokuapp.com/API/Authors/`,{
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
      .then(res => {
        const author = res.data;
        this.setState({ author });
      })
      } 
    render() {
    return(
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  {this.state.author.map(author => (
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
    )
}
}

export default Author;