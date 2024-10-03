// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function SampleFileUpload() {
//   const [file, setFile] = useState(null);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("--->", file);
//   }, [file]);

//   const handleText = (event) => {
//     setText(event.target.value);
//     console.log("text", text);
//   };

//   const handleChange = (event) => {
//     // console.log("event.target.files[0]", event.target.files[0]);
//     setFile(event.target.files[0]);
//     console.log("file====>", file);
//   };

//   function handleSubmit(event) {
//     event.preventDefault();
//     // const url = 'http://localhost:3000/uploadFile';
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("text", text);
//     formData.append("fileName", file.name);
//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     console.log("formData===>", formData);
//     // axios.post(url, formData, config).then((response) => {
//     //   console.log(response.data);
//     // });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>React File Upload</h1>
//         <input type="file" onChange={handleChange} />
//         <input type="text" onChange={handleText} value={text} />

//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default SampleFileUpload;

import React, { useEffect, useState } from "react";
import axios from "axios";

const SampleFileUpload = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  // useEffect to monitor changes in the file
  useEffect(() => {
    if (file) {
      console.log("File selected:", file);
    }
  }, [file]);

  // Handle text input
  const handleText = (event) => {
    setText(event.target.value);
  };

  // Handle file input
  const handleChange = (event) => {
    setFile(event.target.files[0]); // Update the file state with the selected file
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!file || !text) {
      alert("Please provide both file and text.");
      return;
    }

    const formData = new FormData();
    formData.append(`file`, file); // Append file to formData
    formData.append(`text`, text); // Append text to formData
    formData.append("fileName", file.name); // Add file name to formData
    console.log("formData", file, formData);

    const config = {
      headers: {
        "content-type": "multipart/form-data", // Ensure that it is multipart
      },
    };

    formData.forEach((value, key) => {
      console.log("from formDATA", key, value);
    });
    // URL of your backend server
    const url = "http://localhost:8080/uploadFile";

    // axios
    //   .post(url, formData, config)
    //   .then((response) => {
    //     console.log("Response from server:", response.data);
    //     alert("File uploaded successfully!");
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading file:", error);
    //     alert("Error uploading file.");
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <input
          type="text"
          placeholder="Enter some text"
          onChange={handleText}
          value={text}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default SampleFileUpload;
