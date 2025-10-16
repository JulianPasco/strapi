import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['strapi.websitehosti.ng', 'localhost', '127.0.0.1'],
      // You can also use allowedHosts: true for all hosts, but better to list your domain explicitly
    },
  });
};
