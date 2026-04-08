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
const distPath = path.join(__dirname, 'dist');

// Log the resolution path for debugging
console.log('Serving files from:', distPath);

app.use(express.static(distPath));

// API Routes
app.get('/api/status', (req, res) => {
  res.json({ status: 'Serima Legal Server is running' });
});

// Handle React routing, return all 404s to index.html (SPA support)
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(404).send('Error: Production build (dist folder) not found. Please run "npm run build" and upload the dist folder.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
