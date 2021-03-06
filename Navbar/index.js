import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./index.css";
import Button from "../Button";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-icon">
          React <i className="fab fa-react"></i>
        </h1>
        <div className="menuIcon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button className="a">Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;
