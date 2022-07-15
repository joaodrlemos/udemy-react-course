import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Jobs({ jobs }) {
  const [activeJob, setActiveJob] = useState(jobs[0]);

  return (
    <>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job) => {
            return (
              <button
                key={job.id}
                className={
                  activeJob.id === job.id ? "job-btn active-btn" : "job-btn"
                }
                onClick={() => setActiveJob(jobs.find((j) => j.id === job.id))}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{activeJob.title}</h3>
          <h4>{activeJob.company}</h4>
          <p className="job-date">{activeJob.dates}</p>
          {activeJob.duties.map((duty, index) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p key={index}>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        More info
      </button>
    </>
  );
}

export default Jobs;
