import React, { useState } from 'react';
import './Print.css';

const Print = () => {
    const [formData, setFormData] = useState({
        fromDate: '',
        toDate: '',
        address: '',
        technician: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (formData.fromDate === '' || formData.toDate === '' || formData.address === '' || formData.technician === '') {
            alert('Please fill in all fields.');
            return;
        }
        // Here you can handle form submission (e.g., API call, further processing)
        console.log('Form submitted:', formData);
        // Reset form after submission if needed
        setFormData({
            fromDate: '',
            toDate: '',
            address: '',
            technician: ''
        });
    };

    const handleCancel = () => {
        // Reset form fields on cancel
        setFormData({
            fromDate: '',
            toDate: '',
            address: '',
            technician: ''
        });
    };

    return (
        <div className='container'style={{border:"solid 2px", height:"350px",borderColor:"darkgrey", borderRadius:"10px"}}>
            <form onSubmit={handleSubmit}>
            <div style={{display:"flex", marginTop:"80px"}}>
                <div className="form-group" style={{marginLeft:"90px"}}>
                    <label htmlFor="fromDate">From Date :</label>
                    <input type="date" style={{marginLeft:"15px", height:"25px", width:"162px"}} id="fromDate" name="fromDate" value={formData.fromDate} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{marginLeft:"125px"}}> 
                    <label htmlFor="toDate">To Date :</label>
                    <input type="date" style={{marginLeft:"37px", height:"25px", width:"162px"}} id="toDate" name="toDate" value={formData.toDate} onChange={handleChange} required />
                </div>
                </div>

                 <div style={{display:"flex", marginTop:"30px"}}>

                <div className="form-group" style={{marginLeft:"90px"}}>
                    <label htmlFor="address">Address :</label>
                    <input type="text" style={{marginLeft:"30px",  height:"50px"}} id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{marginLeft:"123px"}}>
                    <label htmlFor="technician">Technician :</label>
                    <select id="technician" style={{marginLeft:"20px", height:"25px", width:"162px"}} name="technician" value={formData.technician} onChange={handleChange} required>
                        <option value="">Select Technician</option>
                        <option value="Technician 1">Technician 1</option>
                        <option value="Technician 2">Technician 2</option>
                        <option value="Technician 3">Technician 3</option>
                    </select>
                </div>
                </div>


                <div className='btn-main' style={{textAlign:"center", marginTop:"40px"}}>
        <button className='btn'style={{marginLeft:"-200px"}} type="button" onClick={Print}>
          Print
        </button>
        <button className='btn-2' style={{marginLeft:"10px"}}  type="button" onClick={handleCancel}>
          Cancel
        </button>
        </div>
                
            </form>
        </div>
    );
};

export default Print;
