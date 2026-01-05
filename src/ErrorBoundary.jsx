import { RefreshCcw } from "lucide-react";
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error.toString(),
      errorInfo: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
       <>
        <h1 className="text-danger">Something went wrong...</h1>
        <h6 className="text-danger">
            {this.state.error}
        </h6>
       </>
      );
    }
    return this.props.children;
  }
}
