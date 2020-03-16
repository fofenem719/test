import ReactDOM from "react-dom";
import React, { Component } from "react";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio
} from "@material-ui/core";
import OtherRadio from "./OtherRadio";
export default class App extends Component {
  state = {
    value: null,
    otherValue: "Other"
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleOthers = event => {
    this.setState({ otherValue: event.target.value });
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="female"
            name="gender"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            name="gender"
            control={<Radio />}
            label="Male"
          />
          <OtherRadio
            onTextChange={this.handleOthers}
            value={this.state.otherValue}
            placeholder="Others"
          />
        </RadioGroup>
        {`Selected Item: ${this.state.value}`}
      </FormControl>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
