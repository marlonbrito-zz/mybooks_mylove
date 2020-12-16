import RNFetchBlob from 'react-native-fetch-blob';

function base64converter(exampleFilePath){

  convertFile = (exampleFilePath) => {
      const fs = RNFetchBlob.fs;
      fs.readFile(exampleFilePath, 'base64')
        .then(data => {
            console.log("Base 64:")
            console.log(data);
        })
    }

}
export default base64converter;