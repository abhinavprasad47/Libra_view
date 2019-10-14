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
      axios.get(`https://api.sheety.co/d08f3ac4-6515-4555-843e-289072ca44dc`)
    .then(res => {
      const books = res.data;
      this.setState({ books });
    })
    }
    render(){
    return(
              <div class = "content">
                  <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Language</th>
            <th>Edition</th>
          </tr>
        </thead>
        {this.state.books.map(book => (
        <tbody>
          <tr>
     
            <td>{book.tITLE}</td>
            <td>{book.aUTHOR}</td>
            <td>{book.eDITION}</td>
            <td>{book.aCCESSIONNUMBER}</td>
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
