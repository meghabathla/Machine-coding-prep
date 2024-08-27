import React, { useState } from "react";

const Checkout = ({ steps = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const ActiveComponent = steps[currentStep - 1]?.component;
  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === steps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  return (
    <>
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step 
            ${currentStep > index + 1 || isComplete ? "complete" : ""} 
            ${currentStep == index + 1 ? "active" : ""}`}
            >
              <div className="step-index">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
              <div className="progress-bar">
                <div
                  className={"progress"}
                  style={{
                    width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="step-component">
        <ActiveComponent />
      </div>
      <button onClick={() => handleNext()} className="btn">
        {currentStep === steps.length ? "Finish" : "Next"}
      </button>
    </>
  );
};

export default Checkout;
