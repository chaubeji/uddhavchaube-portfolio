import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Keep a lightweight log; don't leak to users
    if (typeof console !== "undefined" && console.error) {
      console.error("UI error caught:", error, info);
    }
  }

  handleReload = () => {
    try {
      window.location.reload();
    } catch (e) {
      /* no-op */
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f1ea",
            color: "#1a1815",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            padding: "2rem"
          }}
        >
          <div style={{ maxWidth: 520, textAlign: "center" }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a6a3a",
                marginBottom: 18
              }}
            >
              Something went wrong
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 36,
                lineHeight: 1.1,
                margin: "0 0 16px"
              }}
            >
              We hit a small hiccup.
            </h1>
            <p style={{ color: "#4a463f", lineHeight: 1.6, marginBottom: 28 }}>
              The page couldn&apos;t render properly. Please refresh, or reach out
              directly at <a href="mailto:uddhav.chaube16@gmail.com" style={{ color: "#1a1815", textDecoration: "underline" }}>uddhav.chaube16@gmail.com</a>.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                background: "#1a1815",
                color: "#f5f1ea",
                border: "none",
                padding: "12px 22px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer"
              }}
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
