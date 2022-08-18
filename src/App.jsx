import React from "react";
import { Button, Col, Row } from "antd";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import ModeSwitch from "./components/ModeSwitch";

const App = () => (
  <>
    <ModeSwitch />
    <SearchInput />
    <SearchResult />
  </>
);
export default App;
