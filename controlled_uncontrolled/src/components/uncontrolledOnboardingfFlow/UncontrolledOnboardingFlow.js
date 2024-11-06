import React, {useState} from "react";

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {
  // This holds the data that we collect from the user
  // during the steps of the onboarding
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];

  // Each can call this function 
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    // Each child is passed the goToNext function
    return React.cloneElement(currentChild, {goToNext});
  }
  return currentChild;
};
