import React, { Component } from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentdDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Ooops, that didn't work</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
