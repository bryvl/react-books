import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">Error: 404 - Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
