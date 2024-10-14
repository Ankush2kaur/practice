
import './App.css'
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Update from './Components/Update';
import Read from './Components/Read';


function App() {

  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<StudentList/>} />
        <Route path="/add-student" element={<StudentForm/>} />
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/read/:id" element={<Read/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
