import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const navigate=useNavigate();
    const initialValues={name:"",
        email:"",
        phone:""
    }
    const [data,setData] = useState(initialValues)
  const { id } = useParams();


  useEffect(() => {
    axios
      .get("http://localhost:3000/students/" + id)
      .then((apidata) => setData(apidata.data))
      .catch((error) => alert(error));
  }, []);
  const handleData=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/students/"+id,data)
    .then((response)=>{
        console.log(response.data)
    })
    navigate("/");
}
  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h3>Update Student</h3>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleData}
                    value={data.email}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone No</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone No"
                    onChange={handleData}
                    value={data.phone}
                  />
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
                    // value={inputData.name}
                    onChange={handleData}
                    value={data.name}
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                   onClick={handleSubmit}
              >
                Update Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
