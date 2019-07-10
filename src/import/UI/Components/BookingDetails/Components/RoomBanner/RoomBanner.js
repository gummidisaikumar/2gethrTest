import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import roomImage from "../../../../../assets/img/oval-room.jpg";

class RoomBanner extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0px pr-0px">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="pl-0px pr-0px"
            >
              <img src={roomImage} className="room-img__container" alt="" />
            </Col>
          </Row>
          <Row className="room-details__container">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="pl-0px pr-0px"
            >
              <h4 className="room-title mb-0px">The Oval</h4>
            </Col>
          </Row>
          <Row className="room-text-container">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="pl-0px pr-0px"
            >
              <p className="room-title-text mb-0px">3rd floor</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default RoomBanner;
