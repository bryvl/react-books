import React, { Component } from "react";
import Card from "../components/Card";
import Book from "../components/Book";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { BookList } from "../components/BookList";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card title="Your Saved Books">
              {this.state.books.length ? (
                <BookList>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      // pageCount attribute is not displaying pageCount for some reason  
                      pageCount={book.pageCount}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn ml-2"
                          style={{backgroundColor: "#4b354b", color: "white"}}
                        >
                          Remove
                        </button>
                      )}
                    />
                  ))}
                </BookList>
              ) : (
                <h3 className="text-center">Save a Book and You'll See Them Here!</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
