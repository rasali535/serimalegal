import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the 'dist' directory after npm run build
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes (if needed in future)
app.get('/api/status', (req, res) => {
  res.json({ status: 'Serima Legal Server is running' });
});

// Handle React routing, return all 404s to index.html (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
