import React, { useState, ChangeEvent, FormEvent } from "react";

interface JobData {
  company: string;
  position: string;
  date: string;
}

interface JobFormProps {
  onDataChange: (newData: JobData) => void;
}

function JobForm({ onDataChange }: JobFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "company") {
      setCompany(value);
    } else if (name === "position") {
      setPosition(value);
    } else if (name === "date") {
      setDate(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJobData = { company, position, date };
    onDataChange(newJobData);
  };

  return (
    <form className="row g-4" onSubmit={handleSubmit}>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Company"
          name="company"
          value={company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Position"
          name="position"
          value={position}
          onChange={handleChange}
        />
      </div>

      <div className="col">
        <input
          type="date"
          className="form-control"
          placeholder="Date"
          name="date"
          value={date}
          onChange={handleChange}
        />
      </div>

      <div className="col">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default JobForm;
