import React, { Component } from "react";
import {Container, Row, Col } from "reactstrap";
import RoomBanner from "./Components/RoomBanner/RoomBanner";

class BookingDetails extends Component {
  render() {
    return (
    <Container fluid className="pl-0px pr-0px">
       <RoomBanner/>
       <Row className="section-container">
           <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px">
                <h3 className="section-title">Includes:</h3>
           </Col>
           <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px">
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} className="align-center">
                       <i class="fa fa-users" aria-hidden="true"></i>
                        <p className="mb-0px section-text">10 Seat</p>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} className="align-center">
                      <i class="fa fa-television" aria-hidden="true"></i>
                        <p className="mb-0px section-text">TV</p>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} className="align-center">
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <p className="mb-0px section-text">WHITEBOARD</p>
                    </Col>
                </Row>
           </Col>
       </Row>
       <hr className="section-divider"/>
       <Row className="section-container">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px text-left">
            <h6 className="mb-0px">Date & Time of booking</h6>
            <p className="mb-0px title-light-white">June 27th 2019</p>
            <p className="mb-0px title-light-white">3:00 AM <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span> 4.00 AM</p>
         </Col>
       </Row>
       <hr className="section-divider"/>
       <Row className="section-container">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px text-left">
            <h6 className="mb-0px">About the Room</h6>
            <p className="mb-0px title-light-white">The Oval on the 3rd floor of HSR 2gethr</p>
         </Col>
       </Row>
       <hr className="section-divider"/>
     </Container>
    );
  }
}

export default BookingDetails;
