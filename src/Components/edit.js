import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Edit =({ onValChange, formObject, onFormSubmit}) =>{
    const [gender,setGender] = useState('');

const handleGenderChange =(e) => {
  setGender(e.target.value);
 
}
    return(
        <div className="row mb-4">
        <form>
        
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            onChange={onValChange}
            // value={formObject.fname}
            name="fname"
          />

          <input
            type="text"
            className="form-control"
            placeholder="Middle Name"
            onChange={onValChange}
            // value={formObject.mname}
            name="mname"
          />

          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={onValChange}
            // value={formObject.lname}
            name="lname"
          />
          
          <label>Gender</label> <br/>
          <input
             type="radio" 
             onChange={handleGenderChange}
             value="male"
             name="gender"
             checked={gender === 'male'}/>
           <label>Male</label> <br/>

           <input
             type="radio" 
             
             onChange={handleGenderChange}
             value="female"
             name="gender"
             checked={gender === 'female'}/>
             <label>Female</label> <br/>

           <input
             type="radio" 
             
             onChange={handleGenderChange}
             value="others"
             name="gender"
             checked={gender === 'others'}/>
             <label>Others</label>
        
          <input
            type="number"
            className="form-control"
            placeholder="Phone Number"
            onChange={onValChange}
            // value={formObject.email}
            name="phone"
          />
        
        
        <Link to={`/`}>
          <button
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          >Update</button></Link>
          </form>

</div>    )
}

export default Edit;