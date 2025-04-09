// src/components/ServiceSelection.jsx
import { useState } from 'react';

function ServiceSelection({ ecgOptions, onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      onSelect(ecgOptions[selected]);
    }
  };

  return (
    <div className="card">
      <h2>Select Your ECG Service</h2>
      <p className="subtitle">Choose the option that suits your needs:</p>
      
      <form onSubmit={handleSubmit}>
        <div className="service-options">
          {Object.values(ecgOptions).map((option) => (
            <div className="option" key={option.id}>
              <input 
                type="radio" 
                id={option.id} 
                name="ecg_option" 
                value={option.id}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                required
              />
              <label htmlFor={option.id}>
                <div className="option-content">
                  <div className="option-icon">{option.icon}</div>
                  <h3>{option.name}</h3>
                  <p className="price">₹{option.price}</p>
                  <p className="description">{option.description}</p>
                </div>
              </label>
            </div>
          ))}
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn primary"
            disabled={!selected}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default ServiceSelection;
