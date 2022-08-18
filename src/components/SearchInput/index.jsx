import React from "react";
import Search from "antd/lib/input/Search";
import styled from "styled-components";
import http from "../../common/http";

const SearchInput = ({ setUsername }) => {
  const onSearch = (value) => setUsername(value);

  return (
    <SearchInputContainer>
      <Search
        placeholder="Input username"
        enterButton
        size="large"
        onSearch={onSearch}
      />
    </SearchInputContainer>
  );
};

const SearchInputContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 30em;
`;

export default SearchInput;
