import React from "react";

export const ControlledOnboardingFlow = ({ onNext, currentIndex, children, onFinish }) => {
  // This holds the data that we collect from the user
  // during the steps of the onboarding
  

  const goToNext = (stepData) => {
    onNext(stepData)
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    // Each child is passed the goToNext function
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};
