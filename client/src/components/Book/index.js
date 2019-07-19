import React from "react";
import { ListItem } from "../BookList";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button, pageCount }) {
  return (
    <ListItem>
      <Row>
        <Col size="md-8">
          <h3><u>{title}</u></h3>
          {subtitle && <h4>{subtitle}</h4>}
        </Col>
        <Col size="md-3">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
          <p>{pageCount} pages</p>
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
