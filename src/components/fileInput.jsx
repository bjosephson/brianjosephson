/* eslint-disable react/prop-types */
// File Drop
// A React component for uploading files to the DOM.
// Does not do anything with the files, simply provides a user interface
// for drag-and-drop. Users can also upload files through the traditional
// system file-chooser menu by clicking the component.
// When they do, an input with type="file" is created and "clicked"
// using javascipt so that the users never see the input component.
// To use, the parent should call at a minimum the following:
//
// <FileDrop file={file} setFile={setFile} />
//
// Where the parameters are useState functions in the parent component.


import { useState } from "react";
import { ImUpload } from "react-icons/im";
import theme from "../styles/theme";



const FileInput = (props) => {
  const [drag, setDrag] = useState(false);
  const displayText = props.text ?? "Drop a file here, or click to upload."

  const handleClick = () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = () => {
      let files = Array.from(input.files);
      props.setFile(files[0]);
    }
    input.click();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    props.setFile(e.dataTransfer.files[0]);
  }

  return (
    <>
      <div
        onClick={handleClick}
        onDragEnter={() => setDrag(true)}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={() => setDrag(false)}
        onDrop={handleDrop}
        style={{
          alignItems: 'center',
          backgroundColor: drag ? theme.colors.muted : theme.colors.background,
          border: '2px dashed',
          borderRadius: '5px',
          borderColor: theme.colors.textMuted,
          cursor: "pointer",
          display: "flex",
          flexDirection: 'column',
          height: props.height ?? '20rem',
          justifyContent: 'center',
          width: props.width ?? '30rem',
        }}>
        <p className="text-muted" >{displayText}</p>
        <ImUpload color={theme.colors.textMuted} />
      </div>
    </>
  );
};

export default FileInput;