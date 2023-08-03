const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const folderPath = './folder_to_compress'; // Replace with the path to your folder
const outputZipFilePath = './compressed_folder.zip'; // Replace with the desired output zip file path

const compressFolderToZip = async (folderPath, outputZipFilePath) => {
  try {
    const files = await fs.promises.readdir(folderPath);
    const zipData = await Promise.all(files.map(file => compressFile(path.join(folderPath, file))));
    const compressedData = Buffer.concat(zipData);

    await fs.promises.writeFile(outputZipFilePath, compressedData);
    console.log(`Compression completed. Zip file created at: ${outputZipFilePath}`);
  } catch (err) {
    console.error('Error compressing data:', err);
  }
};

const compressFile = async (filePath) => {
  try {
    const fileData = await fs.promises.readFile(filePath);
    return await zlib.promises.gzip(fileData);
  } catch (err) {
    console.error(`Error compressing file "${filePath}":`, err);
  }
};

compressFolderToZip(folderPath, outputZipFilePath);
