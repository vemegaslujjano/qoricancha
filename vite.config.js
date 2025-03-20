import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: 'https://github.com/vemegaslujjano/qori1/', 
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
};