import React from "react";
import styled from "styled-components";
import BasicInfo from "./BasicInfo";
import TopRepos from "./TopRepos";

const SearchResult = () => {
  return (
    <SearchResultContainer>
      <BasicInfo />
      <TopRepos />
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 30em;
  height: 60vh;
  border: 1px solid;
`;

export default SearchResult;
