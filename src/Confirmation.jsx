// src/components/Confirmation.jsx
function Confirmation({ selectedService, userDetails, onReset }) {
    return (
      <div className="card success">
        <div className="success-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for booking your {selectedService.name} service with us.</p>
        
        <div className="confirmation-details">
          <h3>Booking Details</h3>
          <div className="detail-item">
            <span>Service:</span>
            <span>{selectedService.name}</span>
          </div>
          <div className="detail-item">
            <span>Amount Paid:</span>
            <span>₹{selectedService.price}</span>
          </div>
          <div className="detail-item">
            <span>Name:</span>
            <span>{userDetails.name}</span>
          </div>
          <div className="detail-item">
            <span>Address:</span>
            <span>{userDetails.address}</span>
          </div>
        </div>
        
        <p className="info-text">
          {selectedService.id === 'standard' 
            ? 'Our technician will arrive at your location soon with the ECG equipment and provide you with an immediate printed report.'
            : 'Our technician will arrive at your location soon with the ECG equipment. Your results will be reviewed by a certified doctor and delivered within 4-6 hours.'
          }
        </p>
        
        <div className="form-actions">
          <button onClick={onReset} className="btn secondary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  export default Confirmation;