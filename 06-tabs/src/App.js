import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jobData = await response.json();
      setJobs(jobData);
      console.log(jobData);
      setIsLoading(false);
    } catch (error) {
      //Connection errors
      setIsLoading(false);
      console.log(error);
      throw new error();
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <main>
        <section className="section">
          <div className="title">
            <h2>loading...</h2>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        {!isLoading && <Jobs jobs={jobs} />}
      </section>
    </main>
  );
}

export default App;
