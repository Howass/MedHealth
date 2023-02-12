import React, { useState } from 'react'

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    sex: '',
    familyDoctor: '',
    insuranceNumber: 0,
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Legal Name:</label>
          <input
            type="text"
            name="name"
            className='form-control label form'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="DateofBirth">Date of Birth:</label>
          <input
            type="date"
            name="DateofBirth"
            className='form-control label form'
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div>

          <label htmlFor="sex">Sex:</label>
          <select name="sex" value={formData.sex} className='form form-control label' onChange={handleChange}>
            <option value="">Select a sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="FamilyDoc">Family Doctor:</label>
          <input
            type="text"
            name="FamilyDoc"
            className='form-control label form'
            value={formData.familyDoctor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="InsuranceNum">Insurance Number:</label>
          <input
            type="number"
            name="InsuranceNum"
            className='form-control label form'
            value={formData.insuranceNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='form-submit-btn'> Submit</button>
      </form>
    </div>
  )
}

export default PatientForm