import { createRoot } from 'react-dom/client';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement("div");
  const root = createRoot(div)
  root.render(<App />)
});
