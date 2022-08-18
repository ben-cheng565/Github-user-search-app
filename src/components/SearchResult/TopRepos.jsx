import React, { useEffect, useState } from "react";
import styled from "styled-components";
import http from "../../common/http";
import { sortRepos } from "../../common/utils";

const TopRepos = ({ repoUrl }) => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    if (repoUrl) {
      http
        .get(repoUrl)
        .then((res) => {
          setRepos(sortRepos(res.data));
        })
        .catch(() => {});
    }
  }, [repoUrl]);

  return (
    <TopReposContainer>
      <h3>Top 4 Repositories</h3>
      <ul>
        {repos?.slice(0, 4).map((repo, i) => (
          <li key={i}>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
          </li>
        ))}
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
