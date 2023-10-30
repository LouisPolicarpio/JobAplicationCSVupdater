import { CSVLink } from "react-csv";
import { JobData } from "./types";

function CSVfileHandler({ jobData }: { jobData: JobData[] }) {
  return (
    <>
      <div>
        <CSVLink
          data={jobData}
          headers={[
            { label: "Company", key: "company" },
            { label: "Position", key: "position" },
            { label: "Date", key: "date" },
          ]}
          filename={"job-data.csv"}
        >
          Download
        </CSVLink>
      </div>
    </>
  );
}

export default CSVfileHandler;
