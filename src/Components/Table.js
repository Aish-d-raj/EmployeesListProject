import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Table({ tableData,deleteTableRows,gender }) {
    
  // function setID(id, fname,mname,lname, phone) {
	// 	localStorage.setItem("id", id);
	// 	localStorage.setItem("fname", fname);
  //   localStorage.setItem("mname", mname);
  //   localStorage.setItem("lname", lname);
	// 	localStorage.setItem("phone", phone);
	// }
		
	
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.fname}</td>
                <td>{data.mname}</td>
                <td>{data.lname}</td>
                <td>{}</td>
                <td>{data.phone}</td>
                
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>delete</button>
               <Link to={`/edit`}> <button className="btn btn-outline-success"> update</button></Link></td> 
                
              </tr>
            );
          })}
        </tbody>
      </table>
    );
        }
  export default Table;