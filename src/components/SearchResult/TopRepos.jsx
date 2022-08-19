import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetcher } from "../../common/http";
import { sortRepos } from "../../common/utils";

const TopRepos = ({ repoUrl }) => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    if (repoUrl) {
      fetcher(repoUrl)
        .then((data) => setRepos(sortRepos(data)))
        .catch(() => setRepos(null));
    }
  }, [repoUrl]);

  return (
    <TopReposContainer>
      {repos ? (
        <>
          <span>Top 4 Repositories</span>
          <ul>
            {repos?.slice(0, 4).map((repo, i) => (
              <li key={i}>
                <a href={repo.html_url} target="_blank">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <span>No Repositories</span>
      )}
    </TopReposContainer>
  );
};

const TopReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  > span {
    font-size: 18px;
  }
`;

export default TopRepos;
