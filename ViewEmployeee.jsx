import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddEmployeee from './AddEmployeee'




  const ViewEmployeee =()=>{
    var[users,setUsers]=useState([])
    var[update,setUpdate]=useState(false)
    var[singlevalue,setSinglevalue]=useState([])

    useEffect(()=>{
      axios.get("http://localhost:3005/view")
      .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
      })

      },[])

      const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/remove/"+id)
        .then((response)=>{
          alert(response.data)
          window.location.reload(true)

        }).catch((err)=>console.log(err))

      }

      const updateValues=(val)=>{
        console.log("update")
        setUpdate(true)
        setSinglevalue(val)
      }
    
      <Typography variant='h2'>View Employee</Typography>
      

      var finalJSX=<TableContainer>
      <Table align="center">
        <TableHead>
          <TableRow>
            <TableCell align='center'>EMPLOYEE NAME</TableCell>
            <TableCell align='center'>AGE</TableCell>
            <TableCell align='center'>POSITION </TableCell>
            <TableCell align='center'>SALARY </TableCell>
          </TableRow>
          </TableHead>

          <TableBody>
            {users.map((val,i)=>{
              return(

            <TableRow>
            <TableCell>{val.ename}</TableCell>
            <TableCell>{val.eage}</TableCell>
            <TableCell>{val.eposition}</TableCell>
            <TableCell>{val.esalary}</TableCell>
            <TableCell ><Button variant="contained" color='error' onClick={()=>updateValues(val)}>UPDATE</Button></TableCell>
            <TableCell ><Button variant="contained" color='error' onClick={()=>deleteValue(val._id)}>DELETE</Button></TableCell>
            </TableRow>

              )

            })}
          
          </TableBody>
        
      </Table>
    </TableContainer>


      
 

  
  

  
  
    
  if(update) finalJSX=<AddEmployeee data={singlevalue} method='put'/>
  return finalJSX
  
  
      
      }
export default ViewEmployeee
