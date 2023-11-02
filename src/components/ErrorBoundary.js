// ErrorBoundary.js

import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Algo deu errado. Por favor, recarregue a página.</h2>
          {/* Você pode adicionar uma mensagem de erro personalizada aqui */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
