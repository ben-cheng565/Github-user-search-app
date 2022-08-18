import React, { useEffect, useState } from "react";
import styled from "styled-components";
import http from "../../common/http";
import BasicInfo from "./BasicInfo";
import TopRepos from "./TopRepos";

const SearchResult = ({ url }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (url) {
      http
        .get(url)
        .then((res) => {
          setUserData(res.data);

          console.log(res.data);
        })
        .catch(() => {});
    }
  }, [url]);

  return (
    url && (
      <SearchResultContainer>
        <BasicInfo userData={userData} />
        <TopRepos repoUrl={userData?.repos_url} />
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
  height: 60vh;
  border: 1px solid;
`;

export default SearchResult;
