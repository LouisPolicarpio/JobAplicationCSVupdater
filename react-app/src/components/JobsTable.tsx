import { JobData } from "./types";

interface JobsTableProps {
  jobData: JobData[];
  onDelete: (index: number) => void; // Add onDelete prop
}

function JobsTable({ jobData, onDelete }: JobsTableProps) {
  function deleteHandler(index: number) {
    // Call the onDelete prop with the index to delete the item
    onDelete(index);
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company</th>
            <th scope="col">Position</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>{job.date}</td>
              <td>
                <button
                  onClick={() => deleteHandler(index)} // Pass the index to the handler
                  type="button"
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default JobsTable;
