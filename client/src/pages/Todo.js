import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Buttons from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { TextArea, FormBtn } from "../components/Form";

class Todo extends Component {
  state = {
    books: [],
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data, synopsis: "" }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  completeItem = id => {
    API.updateCompleted(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveBook({
      synopsis: this.state.synopsis
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Lives</h1>
            </Jumbotron>
            <form>
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Add note here..."
              />
              <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Active Lives {this.state.books.length}</h1>
              {/* <a className="navbar-brand" href="/completed-todos">
                Completed Items
              </a> */}
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <strong>{book.synopsis}</strong>
                    {/* <Buttons
                      className="float-right"
                      onClick={() => this.completeItem(book._id)}
                    >
                      <i class="check circle icon" />
                    </Buttons> */}
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Lives to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
