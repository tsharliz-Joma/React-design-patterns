import {useState} from "react";
import styled from "styled-components";

const UncontrolledModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;

const UncontrolledModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;

export const UncontrolledModal = ({children}) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <UncontrolledModalBackground onClick={() => setShouldShow(false)}>
          <UncontrolledModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </UncontrolledModalBody>
        </UncontrolledModalBackground>
      )}
    </>
  );
};
