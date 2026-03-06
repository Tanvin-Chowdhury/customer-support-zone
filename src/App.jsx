import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Tickets from "./Components/Tickets/Tickets";

const fetchData = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};

function App() {
  const ticketPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Tickets ticketPromise={ticketPromise}></Tickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
