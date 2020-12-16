import RNFetchBlob from 'react-native-fetch-blob';

class MyExampleClass extends Component {

  convertFile = (exampleFilePath) => {
      const fs = RNFetchBlob.fs;
      fs.readFile(exampleFilePath, 'base64')
        .then(data => {
            console.log("Base 64:")
            console.log(data);
        })
    }

}