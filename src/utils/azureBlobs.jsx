import { BlobServiceClient } from '@azure/storage-blob';
import React, { useState } from 'react';

//Storage account credentials
const account = import.meta.env.VITE_STORAGE_ACCOUNT  // get the storage account name from the .env file
const sasToken = import.meta.env.VITE_STORAGE_SAS  // get the SAS token from the .env file
const containerName = import.meta.env.VITE_STORAGE_CONTAINER  // get the container name from the .env file
const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);  // create a blobServiceClient
const containerClient = blobServiceClient.getContainerClient(containerName);  // create a containerClient




//fetch all images
const fetchImages = async () => {
  if (!account || !sasToken || !containerName) {  // check if the credentials are set
    alert('Please make sure you have set the Azure Storage credentials in the .env file');
    return;
  }
  try {
    const blobItems = containerClient.listBlobsFlat();  // get all blobs in the container     
    const urls = [];
    for await (const blob of blobItems) {
      const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);  // get the blob url
      urls.push({ name: blob.name, url: tempBlockBlobClient.url });  // push the image name and url to the urls array
    }
    console.log(urls)
    return urls;
  } catch (error) {
    console.error(error);  // Handle error
  }
};

//save an Image
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!file) {  // check if the file is selected
    alert('Please select an image to upload');
    return;
  }
  if (!account || !sasToken || !containerName) {  // check if the credentials are set
    alert('Please make sure you have set the Azure Storage credentials in the .env file');
    return;
  }
  try {
    setLoading(true);
    const blobName = `${new Date().getTime()}-${file.name}`; // Specify a default blob name if needed
    const blobClient = containerClient.getBlockBlobClient(blobName);  // get the blob client
    await blobClient.uploadData(file, { blobHTTPHeaders: { blobContentType: file.type } }); // upload the image
    await fetchImages();   // fetch all images again after the upload is completed
  } catch (error) {
    console.error(error);  // Handle error
  }
};

// delete an Image
const handleDelete = async (blobName) => {
  if (!account || !sasToken || !containerName) {  // check if the credentials are set
    alert('Please make sure you have set the Azure Storage credentials in the .env file'); return;
  }
  try {
    setLoading(true);  // Turn on loading
    const blobClient = containerClient.getBlockBlobClient(blobName); // get the blob client
    await blobClient.delete(); // delete the blob
    fetchImages(); // fetch all images again after the delete is completed
  } catch (error) {
    console.log(error) // Handle error
  } finally {
    setLoading(false);  //
  }
};

// Helper function to get the image name without extension
const getImageNameWithoutExtension = (filename) => {
  const dotIndex = filename.lastIndexOf('.');
  return dotIndex !== -1 ? filename.slice(0, dotIndex) : filename;
};

export {
  fetchImages,
  getImageNameWithoutExtension,
  handleDelete,
  handleSubmit,

}