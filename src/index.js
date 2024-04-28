const fs = require("fs/promises");

const reader = async (fileName) => {
  try {
     const content = await fs.readFile(fileName, 'utf-8');
    
    // Return the content of the file
    return content;
  } catch (error) {
    // If there's an error, you can handle it here
    console.error(`Error reading file: ${error.message}`);
    throw error; // Re-throw the error to be handled by the caller
  }
};

module.exports = reader;
