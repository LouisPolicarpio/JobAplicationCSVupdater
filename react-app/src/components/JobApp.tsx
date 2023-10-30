import { useState } from "react";
import JobForm from "./JobForm";
import JobsTable from "./JobsTable";
import CSVfileHandler from "./CSVfileHandler";
import { JobData } from "./types";

function App() {
  const [jobData, setJobData] = useState<JobData[]>([]);

  const handleJobDataChange = (newData: JobData) => {
    // Check if the company and position already exists in jobData
    const duplicateCompany = jobData.some(
      (job) => job.company === newData.company
    );
    const duplicatePosition = jobData.some(
      (job) => job.position === newData.position
    );

    if (duplicateCompany && duplicatePosition) {
      // Handle the case where the company already exists
      alert(
        `Company ${newData.company} with ${newData.position} already Added.`
      );
    } else {
      // Add the new data to jobData
      setJobData((prevData) => [...prevData, newData]);
    }
  };

  const handleDelete = (index: number) => {
    // Create a copy of the jobData array without the item at the specified index
    const updatedJobData = [...jobData];
    updatedJobData.splice(index, 1);

    // Update the state with the modified array
    setJobData(updatedJobData);
  };

  return (
    <>
      <h1 className="display-4 text-center"> title</h1>
      <JobsTable jobData={jobData} onDelete={handleDelete} />
      <CSVfileHandler jobData={jobData} />
      <JobForm onDataChange={handleJobDataChange} />
    </>
  );
}

export default App;
