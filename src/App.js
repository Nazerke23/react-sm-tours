import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const URL = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [data, setData] = useState([]);

  function handleNotInterestedButton(id) {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  }

  useEffect(function () {
    async function getData() {
      setIsLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setTours(data);
      setData(data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <h2 className=" ">Our Tours</h2>
          <Tours tours={tours} onNotInterested={handleNotInterestedButton} />
        </div>
      )}
      {tours.length === 0 && (
        <div>
          <h2>No tours left!</h2>
          <button onClick={() => setTours(data)} className="btn">
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
