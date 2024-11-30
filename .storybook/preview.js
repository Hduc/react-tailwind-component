// .storybook/preview.js

import React from 'react';
import { withThemes } from '@react-theming/storybook-addon';  // Example addon for themes
import { ThemeProvider } from 'styled-components';  // Styled Components (optional)
import './styles.css';  // Các style chung cho Storybook

// Định nghĩa các themes (nếu có)
const themes = [
  { name: 'Light', class: 'light', color: '#ffffff' },
  { name: 'Dark', class: 'dark', color: '#333333' }
];

export const parameters = {
  // Cho phép tự động hiển thị Docs cho mỗi Story
  docs: {
    inlineStories: true,
    iframeHeight: 600,
  },
  // Tùy chỉnh addon controls (để cho phép người dùng chỉnh sửa props)
  controls: {
    expanded: true,
  },
  // Cấu hình theme
  theme: {
    name: 'Light',
    class: 'light',
    color: '#ffffff'
  },
};

// Các decorator toàn cục áp dụng cho tất cả các stories
export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <Story />
    </ThemeProvider>
  ),
  withThemes({ themes })  // Theme switcher (nếu sử dụng addon theme)
];
