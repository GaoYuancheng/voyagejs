import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'voyagejs',
  },
  resolve: {
    docDirs: ['docs', 'src'],
  },
});
