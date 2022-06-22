import { createRoot } from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import App from './App';
import './index.css';

(async () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  const LDProvider = await asyncWithLDProvider({
    user: { key: 'kc@react.org' },
    clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID
  });

  root.render(
    <LDProvider>
      <App />
    </LDProvider>);
})();