import { useEffect, useState } from "react";
import Loading from "./Component/Loading";
import Tours from "./Component/Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const deleteHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchData = async () => {
    setIsLoading(true);
    const resp = await fetch(url);
    const tour = await resp.json();
    setIsLoading(false);
    setTours(tour);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h2 style={{ textAlign: "center" }}>No More Tour</h2>
        <button onClick={() => fetchData()}>Refresh the page</button>
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} deleteHandler={deleteHandler} />
      </main>
    </>
  );
}

export default App;
