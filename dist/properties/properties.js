"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propertiesReader = require("properties-reader");
const properties = propertiesReader('src/properties/application.properties');
const getProperty = (propertyName) => {
    return properties.get(propertyName);
};
module.exports = Object.freeze({
    getProperty
});
