/*const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const addCucumberPreprocessorPlugin = 
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
module.exports = defineConfig({
  
  e2e: {

    async function setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
    
      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: "ts-loader",
                    },
                  ],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );
    
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    }
    
  },
    
    "baseUrl" : 'https://www.saucedemo.com/',
    "chromeWebSecurity" : false,
    "specPattern" : "cypress/e2e/features/*.feature",
    asyn
  },
});*/


const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");



module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
    
      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: "ts-loader",
                    },
                  ],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );
    
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
    chromeWebSecurity: false,
    specFiles: "cypress/e2e/**/*.feature",
    //baseUrl: "https://www.saucedemo.com/",
  },
  
});

