import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['lcov', 'json'], // Relatórios de cobertura
      reportsDirectory: './coverage', // Diretório de saída
    },
    reporters: [
      'default',
      ['vitest-sonar-reporter', { outputFile: 'coverage/test-report.xml' }],
    ],
  },
});
