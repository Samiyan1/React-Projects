import React from "react";
import { useState } from "react";
import Loading from "./loading";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState();
  //const [isLoading, setisLoading] = useState(true);
  
  console.log(results)
  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=uPXtP_Azn4yg9O2uc780HG41LrkWnOig4339AP89x5U&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results),
      //setisLoading(false)
      );
  };
  return (
    <>
      <div className="header">
        <span>جستجو</span>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button onClick={fetchImage}>ارسال</button>
      </div>
      <Loading/>
    </>
  );
}

export default App;
