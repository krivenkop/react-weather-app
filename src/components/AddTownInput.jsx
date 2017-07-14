import React, { Component } from "react";

class AddTownInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    let addTownInput = document.getElementById("add-town-input");
    event.preventDefault();
    if (addTownInput.value.trim() !== "") {
      this.props.addTown(addTownInput.value);
      this.setState({ value: "" });
    } else {
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="add-town">
        <div className="add-town-wrapper">
          <form action="">
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              id="add-town-input"
              placeholder="Введите название города..."
            />
            <button onClick={this.handleClick}>Добавить</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTownInput;
