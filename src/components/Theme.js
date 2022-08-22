import React from "react";
//Conditional Styling
class Theme extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTheme: "dark"
    };
  }
  render() {
    const toggleTheme = () => {
      this.setState({
        selectedTheme: this.state.selectedTheme === "dark" ? "light" : "dark"
      });
    };
    return (
      <div
        style={{
          backgroundColor:
            this.state.selectedTheme === "dark" ? "black" : "white",
          color: this.state.selectedTheme === "dark" ? "white" : "black",
          height: "100vh"
        }}
      >
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>This is {this.state.selectedTheme} theme</p>
      </div>
    );
  }
}

export default Theme;
