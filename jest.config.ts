import type { Config } from "jest";

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@enums": "<rootDir>/src/enums",
    "@themes/(.*)": "<rootDir>/src/themes/$1",
    "@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
    "@adapters/(.*)": "<rootDir>/src/adapters/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@fonts": "<rootDir>/src/assets/fonts",
    "@test-utils": "<rootDir>/test.utils.tsx",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "next/font/(.*)": require.resolve(
      "next/dist/build/jest/__mocks__/nextFontMock.js",
    ),
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  coveragePathIgnorePatterns: ["./src/components/StyledComponentsRegistry/*"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.test.json",
      },
    ],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      functions: 100,
      statements: 100,
    },
  },
};

export default config;
