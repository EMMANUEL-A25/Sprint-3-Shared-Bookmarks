// jest.config.js
export default {
  testEnvironment: "jsdom",
  transform: {}, 
  moduleFileExtensions: ["js", "mjs"],      // <- add mjs
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).mjs"]  // <- include mjs
};
