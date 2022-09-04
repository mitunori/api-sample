import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((json) => setData(json));
  }, []);

  console.log(data, "");

  return (
    <div className="App">
      {/*  */}
      <div className="list">
        {data.map((item, index) => (
          <div key={index} className="item">
            <div>{item.title}</div>
            <div>{item.id}</div>
            <img src={item.thumbnailUrl} alt="" />
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  );
}

export default App;
