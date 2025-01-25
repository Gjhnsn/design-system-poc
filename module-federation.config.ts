import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'designSystem',
  filename: 'remoteEntry.js',
  exposes: {
    './PrimaryButton': './src/components/button/PrimaryButton.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
