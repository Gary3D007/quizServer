import propertiesReader = require('properties-reader');

const properties = propertiesReader('src/properties/application.properties');

const getProperty = (propertyName: string) => {
    return properties.get(propertyName);
};

module.exports = Object.freeze({
    getProperty
});
