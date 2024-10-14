import { useEffect, useState } from "react";
import axios from "axios";
// import { Column } from 'primereact/column';
// import DataTable from 'react-data-table-component';// this is inbulit librairy in react
import { Link } from "react-router-dom";
// data table is inbulit in react
// it always need 2 things one is data and other is columns

const StudentList = () => {
  // const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const getData = async () => {
    await axios
      .get("http://localhost:3000/students")
      .then((apidata) => setStudentData(apidata.data))
      .catch((error) => alert(error));
  };
  useEffect(() => {
    getData();
  }, [!studentData]);

  //   const columns=[{
  //   name:"RollNo",
  //   selector:(row)=>row.id    // after dot we put the name of variable which is in our api
  //   },{
  //     name:"StudentName",
  //     selector:(row)=>row.name
  //   },{
  //     name:"EmailAddress",
  //     selector:(row)=>row.email
  //   },{
  //     name:"phone",
  //     selector:(row)=>row.phone
  //   }]
  const handleDelete=(id)=>{
    const confirm = window.confirm("Would you like to delete ?")
    if(confirm){
      axios.delete("http://localhost:3000/students/"+id)
      .then(res=> setStudentData(res.data))
      .catch(error=>console.log(error))
    }
  }
  return (
    <div className="">
      {/* <DataTable
       title="Students Data"
       columns={columns}
       data={studentData}
       pagination
       fixedHeader // by using this we can fix the header
      //  fixedHeaderScrollHeight="300px"  // by using this we can fix the scroll height and after this height the rest data is displayed using a scroll bar 
      highlightOnHover
       /> */}
       <h4 className="mb-4 p-4">Student Data</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
  <tbody>
          {studentData.length > 0 ? (
            studentData.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>
                  <Link to={`/read/${value.id}`}>
                    <button className="btn btn-sm btn-primary">Read</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/update/${value.id}`}>
                    <button className="btn btn-info btn-sm">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No students found. Please add new students.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-center">
        <Link to="/add-student">
          <button className="btn btn-primary">Add Student</button>
        </Link>
      </div>
    </div>
  );
};

export default StudentList;

