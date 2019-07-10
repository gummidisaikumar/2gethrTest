import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Picker from "react-mobile-picker-scroll";

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        hours: "hours",
        medium: "medium"
      },
      optionGroups: {
        hours: ["1:00", "2:00", "4:00","5:00", "6:00", "7:00","8:00", "10:00", "11:00","12:00"],
        medium: ["AM", "PM"],
      }
    };
  }

  handleChange = (hours, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [hours]: value
      }
    }));
  };
 
  render() {
    const {optionGroups, valueGroups} = this.state;
    return (
      <Row className="section-container pt-32px pb-32px">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="pl-0px pr-0px text-left"
        >
           <Picker
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={this.handleChange} />
            
        </Col>
      </Row>
    );
  }
}

export default TimePicker;
