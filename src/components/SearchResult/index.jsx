import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetcher } from "../../common/http";
import BasicInfo from "./BasicInfo";
import TopRepos from "./TopRepos";

const SearchResult = ({ url }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (url) {
      fetcher(url)
        .then((data) => setUserData(data))
        .catch(() => setUserData(null));
    }
  }, [url]);

  return (
    userData && (
      <SearchResultContainer>
        <BasicInfo userData={userData} />
        <TopRepos repoUrl={userData.repos_url} />
      </SearchResultContainer>
    )
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
  height: 25em;
  border: 1px solid;
`;

export default SearchResult;
