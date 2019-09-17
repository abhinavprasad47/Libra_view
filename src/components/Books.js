import React ,{ Component} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table'

class Books extends Component {
  constructor(){
      super()
      this.state = {
          books : []
      }
  }
  componentDidMount() {
      axios.get(`https://libra-cek.herokuapp.com/API/Books/`)
    .then(res => {
      const books = res.data;
      this.setState({ books });
    })
    }
    render(){
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
        {this.state.books.map(book => (
        <tbody>
          <tr>
            <td>{book.Code.number_code}</td>
            <td>{book.title}</td>
            <td>{book.author.first_name}</td>
            <td>{book.author.last_name}</td>
            <td>{book.language}</td>
            <td>{book.Edition}</td>
          </tr>
        </tbody>
        ))
        }
        </Table>
        </div>
    );
}
}

export default Books ;
