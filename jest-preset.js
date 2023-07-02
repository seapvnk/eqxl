const path = require("path");

module.exports = {
  roots: [path.resolve(__dirname, "src")],
  testMatch: ["**/*.spec.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
  verbose: true,
};
