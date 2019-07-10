import React, { Component } from "react";
import {Row, Col } from "reactstrap";

class BookingDone extends Component {
  render() {
    return (
      <Row className="section-container pt-32px pb-32px">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px text-left">
            <h5 className="room-title title-black"><i class="fa fa-check-circle-o" aria-hidden="true"></i></h5>
            <p className="mb-0px align-center">Your Booking has been completed successfully</p>
         </Col>
       </Row>
    );
  }
}

export default BookingDone;
