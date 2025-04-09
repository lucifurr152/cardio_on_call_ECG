// src/App.jsx
import { useState } from "react";
import "./App.css";
import ServiceSelection from "./ServiceSelection";
import UserDetails from "./UserDetails";
import Payment from "./Payment";
import Confirmation from "./Confirmation";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const ecgOptions = {
    standard: {
      id: "standard",
      name: "Standard ECG",
      price: 399,
      description: "Immediate printed report",
      icon: "📝",
    },
    doctor: {
      id: "doctor",
      name: "Doctor-Verified ECG",
      price: 499,
      description: "Reviewed by a certified doctor, delivered within 4–6 hours",
      icon: "🩺",
    },
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
    setCurrentStep(3);
  };

  const handlePaymentSubmit = (method) => {
    setPaymentMethod(method);
    setCurrentStep(4);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setUserDetails(null);
    setPaymentMethod(null);
  };

  return (
    <div className="app">
      <header>
        <div className="container">
          <h1>ECG at Home</h1>
          <p>Professional ECG monitoring from the comfort of your home</p>
        </div>
      </header>

      <main className="container">
        {currentStep === 1 && (
          <ServiceSelection
            ecgOptions={ecgOptions}
            onSelect={handleServiceSelect}
          />
        )}

        {currentStep === 2 && (
          <UserDetails
            selectedService={selectedService}
            onSubmit={handleUserDetailsSubmit}
            onBack={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 3 && (
          <Payment
            selectedService={selectedService}
            userDetails={userDetails}
            onSubmit={handlePaymentSubmit}
            onBack={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 4 && (
          <Confirmation
            selectedService={selectedService}
            userDetails={userDetails}
            onReset={resetForm}
          />
        )}
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 ECG at Home. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
