import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const StudentForm = () => {
  const [formErrors,setFormErrors] = useState({});
    const navigate = useNavigate();
    const data ={
        id:"",
        name:"",
        email:"",
        phone:""
    }
    const [inputData, setInputData] = useState(data)
    const handleData =(e)=>{
      setInputData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      const errors = validate(inputData)
      setFormErrors(errors)
        if (Object.keys(errors).length === 0){
          axios.post("http://localhost:3000/students",inputData)
          .then((response)=>{
              console.log(response.data)
          })
          navigate("/");
        } 
    }


const validate =(inputData)=>{
  const errors={};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!inputData.name){
    errors.name="name is required"
  }
  if(!inputData.id){
    errors.id =  "id is required"
  }
  if(!inputData.email){
    errors.email =  "email is required"
  }
  else if(!emailRegex.test(inputData.email)){
    errors.email = "Email is not valid "
  }
  if(!inputData.phone){
    errors.phone = "phone is required"
  } else if (inputData.phone.length<10){
     errors.phone="Please Enter a valid Phone Number"
  }
  return errors
}
  return (
    <div className="container shadow p-4 mt-4 mb-4">
      <h3 className="mb-4">Add New Student</h3>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input
                className="form-control"
                type="text"
                name="id"
                placeholder="Enter Roll No"
                value={inputData.id}
                onChange={handleData}
              />
               {formErrors.id && <p className="text-danger">{formErrors.id}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={inputData.email}
                onChange={handleData}
              />
               {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={inputData.name}
                onChange={handleData}
              />
               {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Phone No</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="Enter Phone No"
                value={inputData.phone}
                onChange={handleData}
              />
               {formErrors.phone && <p className="text-danger">{formErrors.phone}</p>}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
