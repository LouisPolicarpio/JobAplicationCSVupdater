import React from "react";

interface JobData {
  company: string;
  position: string;
  date: string;
}

interface JobsTableProps {
  jobData: JobData[];
}

function JobsTable({ jobData }: JobsTableProps) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company</th>
            <th scope="col">Position</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>{job.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default JobsTable;
