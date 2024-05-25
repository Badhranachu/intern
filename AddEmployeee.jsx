import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddEmployeee = (props) => {
  var navigate=useNavigate()
var[inputs,setInputs]=useState(props.data)
console.log("props data:",props.data)
console.log("props method:",props.method)



const inputHandler =(e)=>{
  const{name,value} = e.target
  setInputs((prevData)=>({...prevData,[name]:value}))
  console.log(inputs)
}

const Addhandler=()=>{
  console.log("button cliked");
  if(props.method==="post"){
    axios.post("http://localhost:3005/create",inputs)
    .then((response)=>{
      console.log(response.data)
      alert(response.data)
      navigate('/V');
    },10)
    .catch((err)=>console.log(err))
  }
  if(props.method==="put"){
    axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
    alert("data updated")
    navigate("/add");
    setTimeout(() => {
      navigate("/v");
    }, 10);
  }
}


  return (
    <div>
        <br /><br /><br /><br />
      
        <Typography variant='h2'>Add Employee</Typography>
        <br />
        <TextField id="outlined-basic" label="Employee Name" variant="outlined" name="ename" value={inputs.ename} onChange={inputHandler}/> <br /><br /><br />
        <TextField id="outlined-basic" label="Age" variant="outlined" name="eage" value={inputs.eage} onChange={inputHandler}/> <br /><br /><br />
        <TextField id="outlined-basic" label="Position" variant="outlined" name="eposition" value={inputs.position}  onChange={inputHandler}/> <br /><br /><br />
        <TextField id="outlined-basic" label="Salary" variant="outlined" name="esalary" value={inputs.esalary} onChange={inputHandler} /> <br /><br /><br />
        <Button variant="contained" color='error' onClick={Addhandler} >Submit</Button>


      
    </div>
  )
}

export default AddEmployeee
