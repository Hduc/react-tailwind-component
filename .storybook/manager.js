// .storybook/manager.js
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light', // Hoặc 'dark'
    colorPrimary: '#1E90FF',
    colorSecondary: '#FF6347',
    // Các cấu hình theme khác cho giao diện
    appBg: '#f0f0f0',
    appContentBg: '#ffffff',
    appBorderColor: '#ddd',
    appBorderRadius: 4,
  }),
});
