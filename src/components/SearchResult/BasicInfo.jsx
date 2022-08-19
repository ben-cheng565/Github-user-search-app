import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";

const BasicInfo = ({ userData }) => {
  return (
    <BasicInfoContainer>
      <Avatar size={"large"} src={userData?.avatar_url} />
      <div>
        <strong>{userData?.name ?? userData?.login}</strong>
        <div>
          <strong>{userData?.followers}</strong> followers |{" "}
          <strong>{userData?.public_repos}</strong> repositories
        </div>
      </div>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled.div`
  display: flex;
  padding-top: 20px;

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
