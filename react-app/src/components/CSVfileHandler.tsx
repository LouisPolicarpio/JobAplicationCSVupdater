import { CSVLink } from "react-csv";
import { JobData } from "./types";
import React, { useState } from "react";
import Papa from "papaparse";

interface CSVfileHandlerProps {
  jobData: JobData[];
  onDataChange: (newData: JobData) => void;
}

function CSVfileHandler({ jobData, onDataChange }: CSVfileHandlerProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length === 1) {
      const file = files[0];
      setSelectedFile(file);
    } else {
      console.log("File not valid");
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      readAndParseCSV(selectedFile);
    }
  };

  const readAndParseCSV = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target!.result as string;
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: handleParsedData,
      });
    };

    reader.readAsText(file);
  };

  const handleParsedData = (result: Papa.ParseResult<{}>) => {
    console.log("Parsed CSV Data:", result.data);
    (result.data as JobData[]).forEach((item: JobData) => {
      console.log(item);
      onDataChange(item);
    });
  };

  return (
    <>
      <div className="row g-5">
        <div className="col">
          <CSVLink
            className="btn btn-primary"
            data={jobData}
            headers={[
              { label: "company", key: "company" },
              { label: "position", key: "position" },
              { label: "date", key: "date" },
            ]}
            filename={"job-data.csv"}
          >
            Download
          </CSVLink>
        </div>
        <div className="col">
          <input
            className="form-control-sm"
            type="file"
            accept=".csv"
            onChange={handleFileSelect}
          ></input>

          <button className="btn btn-primary" onClick={handleFileUpload}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default CSVfileHandler;
