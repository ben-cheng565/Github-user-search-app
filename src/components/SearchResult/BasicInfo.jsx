import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";

const BasicInfo = () => {
  return (
    <BasicInfoContainer>
      <Avatar size={"large"} />
      <div>
        <strong>username</strong>
        <div>
          <strong>20</strong> followers | <strong>20</strong> repositories
        </div>
      </div>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    > strong {
      font-size: 20px;
    }
  }
`;

export default BasicInfo;
