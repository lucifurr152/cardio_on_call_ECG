// src/components/UserDetails.jsx
import { useState } from 'react';

function UserDetails({ selectedService, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    address: ''
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
    onSubmit(formData);
  };

  return (
    <div className="card">
      <h2>Enter Your Details</h2>
      <p className="subtitle">You selected: {selectedService.name} - ₹{selectedService.price}</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            id="age" 
            name="age" 
            min="1" 
            max="120"
            value={formData.age}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            pattern="[0-9]{10}" 
            placeholder="10-digit number"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Full Address</label>
          <textarea 
            id="address" 
            name="address" 
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="button" className="btn secondary" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="btn primary">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserDetails;