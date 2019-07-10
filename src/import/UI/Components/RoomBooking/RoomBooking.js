import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import RoomDetails from "./Component/RoomDetails/RoomDetails";
import RoomDetailsData from "./Component/RoomDetails/RoomDetailsData";
import BookingDetails from "../BookingDetails/BookingDetails";
import BookingDone from "../BookingDone/BookingDone";
import TimePicker from "./Component/RoomDetails/TimePicker";

class RoomBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <RoomDetails />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="margin-auto">
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <TimePicker />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <TimePicker />
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="pl-0px pr-0px pt-32px pb-32px"
        >
          <Row>
            {RoomDetailsData.map(data => (
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                key={data.id}
                onClick={this.toggle}
                className="padding-1rem"
              >
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="pl-0px pr-0px"
                  >
                    <img
                      src={data.roomImg}
                      className="card-img__container"
                      alt={data.id}
                    />
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="pl-0px pr-0px"
                  >
                    <Row className="card-information-container">
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className="pl-0px pr-0px align-left"
                      >
                        <p className="section-text title-white fw-800 mb-0px">
                          {data.roomTitle}
                        </p>
                      </Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className="pl-0px pr-0px align-left"
                      >
                        <p className="section-text title-white fw-800 mb-0px">
                          {data.roomNo}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <ul className="d-flex link-container">
            <li>
              <i class="fa fa-globe" aria-hidden="true" />
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true" />
            </li>
            <li className="send-item">
              <i
                class="fa fa-paper-plane send-item--position"
                aria-hidden="true"
              />
            </li>
            <li>
              <i class="fa fa-dashcube" aria-hidden="true" />
            </li>
            <li>
              <i class="fa fa-user-o" aria-hidden="true" />
            </li>
          </ul>
          {/* <Button color="danger" onClick={this.toggle}>Button</Button> */}
        </Col>
        <Col>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle} />
            <ModalBody>
              <BookingDetails />
              <Row className="section-container pt-32px pb-32px">
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="pl-0px pr-0px"
                >
                  <Button
                    className="btn btn-block common-btn"
                    onClick={this.toggleNested}
                  >
                    Book
                  </Button>
                </Col>
              </Row>
              <Modal
                isOpen={this.state.nestedModal}
                toggle={this.toggleNested}
                onClosed={this.state.closeAll ? this.toggle : undefined}
              >
                <ModalHeader />
                <ModalBody>
                  <BookingDone />
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="primary" onClick={this.toggleNested}>Done</Button> */}
                  <Button color="primary" onClick={this.toggleAll}>
                    Done
                  </Button>
                </ModalFooter>
              </Modal>
            </ModalBody>
            {/* <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
          </Modal>
        </Col>
      </Row>
    );
  }
}

export default RoomBooking;
