import { Component } from "react";

import { Paper, TextField } from "@mui/material";

class Searchbar extends Component {
  state = {
    searchTerm: "",
  };

  handleSearch = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleSearch} />
        </form>
      </Paper>
    );
  }
}

export default Searchbar;
