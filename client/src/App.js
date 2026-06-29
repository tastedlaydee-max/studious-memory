import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiStatus, setApiStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test API connection
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => {
        setApiStatus(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎉 studious-memory</h1>
        <p>Welcome to your new full-stack application!</p>
      </header>

      <main className="app-main">
        <section className="status-section">
          <h2>System Status</h2>
          {loading ? (
            <p>Checking API connection...</p>
          ) : apiStatus ? (
            <div className="status-card">
              <p className="status-ok">✅ Backend is running</p>
              <pre>{JSON.stringify(apiStatus, null, 2)}</pre>
            </div>
          ) : (
            <p className="status-error">
              ❌ Unable to connect to backend
            </p>
          )}
        </section>

        <section className="getting-started">
          <h2>🚀 Getting Started</h2>
          <ol>
            <li>Read the README.md for setup instructions</li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Configure environment variables</li>
            <li>Start development: <code>npm run dev</code></li>
            <li>Build your awesome features!</li>
          </ol>
        </section>

        <section className="next-steps">
          <h2>📝 Next Steps</h2>
          <ul>
            <li>Create API routes in <code>server/routes/</code></li>
            <li>Build React components in <code>client/src/components/</code></li>
            <li>Set up database models in <code>server/models/</code></li>
            <li>Customize this page in <code>client/src/App.js</code></li>
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ • 2026</p>
      </footer>
    </div>
  );
}

export default App;