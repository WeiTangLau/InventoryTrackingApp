import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class ItemImage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="flex justify-center">
            <Image
              className="w-25-l pa3"
              src={`data:image/png;base64,${this.props.image}`}
              alt="product"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ItemImage;

/*
 
*/
