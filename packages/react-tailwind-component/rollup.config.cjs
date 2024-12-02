import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
export default {
  input: 'src/index.tsx', // Điểm đầu vào
  output: {
    dir: 'dist',
    format: 'esm', // Module ES
    sourcemap: true
  },
  plugins: [
    resolve(), // Hỗ trợ module Node.js
    commonjs(), // Chuyển đổi CommonJS sang ESModules
    typescript({
      tsconfig: './tsconfig.json', // Đảm bảo sử dụng đúng cấu hình TypeScript
      jsx: 'react-jsx' // JSX Transform
    }),
    postcss({
      extract: true,
      minimize: true,  // Đảm bảo minify CSS
      plugins: [cssnano()]  // Sử dụng cssnano để tối ưu CSS
    }),
    
    terser() // Tối ưu hóa mã
  ],
  external: ['react', 'react-dom'] // Đánh dấu React là dependency ngoài
};

