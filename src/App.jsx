import { Suspense, useMemo } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Tickets from "./Components/Tickets/Tickets";
import Progress from "./Components/Progress/Progress";
import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};

function App() {
  const ticketPromise = useMemo(() => fetchData(), []);

  return (
    <>
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-[80px]">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Tickets ticketPromise={ticketPromise} />
        </Suspense>

        {/* <div>
            <TaskStatus />
            <ResolveTask />
          </div> */}
      </div>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
