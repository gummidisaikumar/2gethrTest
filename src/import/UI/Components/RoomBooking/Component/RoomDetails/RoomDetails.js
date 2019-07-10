import React, { Component } from "react";
import {Row, Col } from "reactstrap";

class RoomDetails extends Component {
  render() {
    return (
      <Row className="section-container pt-32px pb-32px">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px text-center">
            <h4 className="room-title title-black mb-0px pb-16px pb-16px">Richmond Town</h4>
            <p className="section-text section-text--big mb-0px"> 27th Jun 2019</p>
         </Col>
         
       </Row>
    );
  }
}

export default RoomDetails;
