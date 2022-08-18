import React from "react";
import styled from "styled-components";

const TopRepos = () => {
  return (
    <TopReposContainer>
      <h3>Top 4 Repositories</h3>
      <ul>
        <li>fasdf</li>
        <li>fasdf</li>
        <li>fasdf</li>
        <li>fasdf</li>
      </ul>
    </TopReposContainer>
  );
};

const TopReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export default TopRepos;
