import { useState } from "react";
import JobForm from "./JobForm";
import JobsTable from "./JobsTable";

interface JobData {
  company: string;
  position: string;
  date: string;
}

function App() {
  const [jobData, setJobData] = useState<JobData[]>([]);

  const handleJobDataChange = (newData: JobData) => {
    setJobData([...jobData, newData]);
  };

  return (
    <>
      <h1 className="display-4 text-center"> title</h1>
      <JobsTable jobData={jobData} />
      <JobForm onDataChange={handleJobDataChange} />
    </>
  );
}

export default App;
