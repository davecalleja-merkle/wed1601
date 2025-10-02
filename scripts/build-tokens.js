const StyleDictionary = require('style-dictionary');

async function buildTokens() {
  try {
    console.log('Building design tokens...');
    const sd = await StyleDictionary.extend('style-dictionary.config.js');
    await sd.buildAllPlatforms();
    console.log('Design tokens built successfully!');
  } catch (error) {
    console.error('Error building design tokens:', error);
  }
}

buildTokens();