import type { Config } from "jest";

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "next/font/(.*)": require.resolve(
      "next/dist/build/jest/__mocks__/nextFontMock.js",
    ),
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsConfig: "./tsconfig.test.json",
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
