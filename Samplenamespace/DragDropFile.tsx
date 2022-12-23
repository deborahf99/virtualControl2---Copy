import * as React from 'react';
import {useState, useEffect} from "react"
import {useDropzone} from "react-dropzone";
import { NeutralColors, PrimaryButton } from '@fluentui/react';
import "./assets/css/App.css";

function Dropzone() {
  const [showTable, setShowTable] = React.useState(false);
  const [inputfile, setFile]: any[] = useState([]);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'application/pdf': ['.pdf, .xls, .xlsx']
    },
    onDrop: handleFiles
  });
  
  function handleFiles(){
    setFile(acceptedFiles);
    console.log(inputfile)
  }

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name}
    </li>
  ));

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />

        <div id="form-file-upload">
          <p className="dropzone-content">
          <svg xmlns="http://www.w3.org/2000/svg" id="file-pic" viewBox="-20 0 60 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>
          <br />
          Upload PDF / Excel here
          </p>      
        </div>
      </div>
      <br />
      <PrimaryButton className="upload-button">Upload button</PrimaryButton>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

async function myCustomFileGetter(event : any) {
  const files = [];
  const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

  for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
    
    Object.defineProperty(file, 'myProp', {
      value: true
    });

    files.push(file);
  }

  console.log(files);
  return files;
}

export default Dropzone;
