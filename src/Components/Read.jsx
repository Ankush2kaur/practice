import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// in this component we will read the data based on the id 
const Read = () => {
    const [studentData, setStudentData] = useState([]);
    const {id}= useParams();
    useEffect(()=>{
             axios
              .get("http://localhost:3000/students/"+id)
              .then((apidata) => setStudentData(apidata.data))
              .catch((error) => alert(error));
    },[])
    
  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        <div className="mb-2">
      <p> Name:{studentData.name}</p>
        </div>
        <div className="mb-2">
      <p> Email:{studentData.email}</p>
        </div>
        <div className="mb-2">
      <p> Phone:{studentData.phone}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Read
