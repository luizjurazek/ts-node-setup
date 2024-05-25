module.export = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coreverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/Src/$1",
  },
};
