import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // JSDOM 환경을 사용하도록 설정
    environment: 'jsdom',
  },
});
