import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 3001,
  },
  runtime: {
    router: true,
  },
  output: {
    distPath: {
      root: './dist', // Ensures build files are output to the `dist` folder
    },
    assetPrefix: process.env.NODE_ENV === 'production'
      ? 'https://design-system-poc-ten.vercel.app/' // Your production URL
      : 'http://localhost:3001/', // Local development URL
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
  ],
});
