import React, { useState, Fragment } from "react";
import Form from "./Form";
import Table from "./Table";
function Profile() {
  const [tableData, setTableData] = useState([]);
  const [gender,setGender] = useState('');
  const [formObject, setFormObject] = useState({
    fname: "",
    mname: "",
    lname: "",
    gender:"",
    
    phone: "",
    
  });

 

  const handleGenderChange =(e) => {
    setGender(e.target.value);
  }
  
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };

  const onClear = () =>{
    const isEmpty = { fname: "",mname: "",lname: "",gender:"", phone: ""};
      setFormObject(isEmpty);
    
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
    //   const isEmpty = { name: "", email: "", profile: "" };
    //   setFormObject(isEmpty);
    }
  };


  const deleteTableRows =(index) => {
    const rows =[...tableData];
    rows.splice(index,1);
    setTableData(rows);
  }
  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
        onClear= {onClear}
        gender={gender}
        handleGenderChange={handleGenderChange}
      />
      <Table tableData={tableData} deleteTableRows={deleteTableRows}  />
    </Fragment>
  );
}
export default Profile;