import React, { Component } from "react";
import { FormControlLabel, Radio, TextField } from "@material-ui/core";

export default class OtherRadio extends Component {
  render() {
    console.log(this.props);
    return (
      <FormControlLabel
        value={this.props.value}
        onChange={this.props.onChange}
        checked={this.props.checked}
        control={<Radio name="subtype" />}
		style={{marginTop:-10+'px'}}
        label={
          <TextField
            id="standard-bare"
            placeholder={this.props.placeholder}
            margin="normal"
            onChange={this.props.onTextChange}
          />
        }
      />
    );
  }
}
