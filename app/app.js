const express = require("express");
const app = express();

const PORT = 3000;

// Optional: inline CSS as a route for convenience
const css = `
:root {
  --bg: #0b1020;
  --card: #171a2b;
  --text: #e6e6f0;
  --accent: #7c5cff;
}
* { box-sizing: border-box; }
html, body, #root { height: 100%; margin: 0; padding: 0; }
body {
  font-family: Inter, Arial, sans-serif;
  background: radial-gradient(circle at 20% -10%, rgba(124,92,255,0.25), transparent 40%),
              radial-gradient(circle at 100% 0%, rgba(0, 200, 255, 0.15), transparent 40%),
              #0b1020;
  color: var(--text);
}
.app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.card {
  width: 100%;
  max-width: 860px;
  background: linear-gradient(135deg, rgba(23,26,43,0.95), rgba(23,26,43,0.75) 70%), rgba(23,26,43,0.9);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  border: 1px solid rgba(124,92,255,0.25);
}
Header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.brand .logo {
  width: 40px; height: 40px; border-radius: 10px;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #7c5cff 0%, #4cc9f0 100%);
  font-size: 22px;
}
.title {
  font-size: 1.6rem;
  margin: 0;
}
.subtitle {
  color: #cbd5e1;
  margin: 6px 0 0;
}
.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
  align-items: center;
}
.hero p { margin: 0; line-height: 1.6; color: #d6d6e6; }
.btns {
  margin-top: 20px;
  display: flex; gap: 12px; flex-wrap: wrap;
}
.btn {
  background: var(--accent);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}
.btn.secondary {
  background: #2a2f4a;
}
.hero-visual {
  text-align: center;
  border-radius: 14px;
  padding: 14px;
  border: 1px solid rgba(124,92,255,0.25);
  background: linear-gradient(135deg, rgba(124,92,255,0.08), rgba(0,0,0,0.15));
}
.hero-visual img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}
.kbd {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 6px;
  background: #1e254a;
  color: #e5e7eb;
  font-family: ui-monospace,SFMono-Regular,Monaco,Consolas;
  font-size: 12px;
}
@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; }
}
`;

app.get("/", (req, res) => {
  // Serve a full HTML page
  res.set("Content-Type", "text/html");
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Node.js App — Beautiful Page</title>
  <meta name="description" content="A Node.js Express app serving a beautiful HTML page." />
  <link rel="icon" href="data:ico;base64,iVBORw0KGgo=" />
  <style>${css}</style>
</head>
<body>
  <div class="app">
    <main class="card" aria-label="Welcome card">
      <header style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <div class="brand">
          <div class="logo" aria-label="Logo">🚀</div>
          <div>
            <h1 class="title" style="margin:0;font-size:1.4rem;">Welcome to Node.js App</h1>
            <div class="subtitle" style="font-size:0.9rem;color:#cbd5e1;">Deployed with a friendly HTML page</div>
          </div>
        </div>
      </header>
      <section class="hero" role="region" aria-label="Hero section">
        <div>
          <p>This page demonstrates serving a richly styled HTML page from an Express app. It includes a responsive layout, a gradient card, and clear call-to-action buttons.</p>
          <div class="btns">
            <a href="#" class="btn" onclick="alert('Hello from the primary button!'); return false;">Get Started</a>
            <a href="#" class="btn secondary" onclick="alert('Learn more coming soon!'); return false;">Learn More</a>
            <span class="kbd" title="Keyboard shortcut">Ctrl</span><span class="kbd" title="Keyboard shortcut">R</span> to reload
          </div>
        </div>
        <div class="hero-visual" aria-label="Visual">
          <img src="https://dummyimage.com/600x300/1e1e2a/8a8aa6.png&text=Beautiful+UI" alt="Beautiful UI preview" />
        </div>
      </section>
    </main>
  </div>
</body>
</html>`);
});

// Optional: serve a CSS file if you want a separate stylesheet
app.get("/styles.css", (req, res) => {
  res.set("Content-Type", "text/css");
  res.send(css);
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

module.exports = app;
