// import { useState, useEffect, useRef } from 'react';
// import './App.css';
// import { uploadFile } from './service/api';

// function App() {
//   const [file, setFile] = useState('');
//   const [result, setResult] = useState('');
//   const fileInputRef = useRef();
//   const url = '';

//   useEffect(() => {
//     async function fetchImage() {
//       if (file) {
//         const formData = new FormData();
//         formData.append("name", file.name);
//         formData.append("file", file);

//         try {
//           const response = await uploadFile(formData);
//           console.log("Full RESPONSE:", response);

//           if (response?.path) {
//             setResult(response.path);
//           } else {
//             console.error('Response does not contain path:', response);
//             setResult('Error: Invalid response');
//           }
//         } catch (error) {
//           console.error('Error uploading file:', error);
//           setResult('Error uploading file');
//         }
//       }
//     };
//     fetchImage();
//   }, [file]);

//   const handleUploadClick = () => {
//     console.log(file);
//     fileInputRef.current.click();
//   };

//   return (
//     <div className='container'>
//       {/* <img src="https://www.flaticon.com/free-icon/folder_3767084?term=file&page=1&position=3&origin=search&related_id=3767084" 
//       className='img'  /> */}
//       <div className='wrapper'>
//         <h1>File sharing</h1>
//         <p>Easily upload your file and get a shareable download link!</p>

        
//         <button onClick={handleUploadClick}>Upload</button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         {result && <a href={result} target='_blank' rel="noopener noreferrer">{result}</a>} 
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();
  // const url = '';

  useEffect(() => {
    async function fetchImage() {
      if (file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);

        try {
          const response = await uploadFile(formData);
          console.log("Full RESPONSE:", response);

          if (response?.path) {
            setResult(response.path);
          } else {
            console.error('Response does not contain path:', response);
            setResult('Error: Invalid response');
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          setResult('Error uploading file');
        }
      }
    }
    fetchImage();
  }, [file]);

  const handleUploadClick = () => {
    console.log(file);
    fileInputRef.current.click();
  };

  return (
    <div className='container'>
      {/* <img src={url} className='img' alt="Uploaded file" /> */}
      <div className='wrapper'>
        <h1>File sharing</h1>
        <p>Easily upload your file and get a shareable download link!</p>
        
        <button onClick={handleUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {result && <a href={result} target='_blank' rel="noopener noreferrer">{result}</a>} 
      </div>
    </div>
  );
}

export default App;
