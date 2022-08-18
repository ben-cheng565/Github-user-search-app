import React from "react";
import styled from "styled-components";
import { Switch } from "antd";

const ModeSwitch = () => {
  const handleSwitchChange = () => {
    console.log("adfasd");
  };

  return (
    <ModeSwitchContainer>
      <Switch
        checkedChildren="Light"
        unCheckedChildren="Dark"
        defaultChecked
        onChange={handleSwitchChange}
      />
    </ModeSwitchContainer>
  );
};

const ModeSwitchContainer = styled.div`
  padding-left: 20px;
  padding-top: 20px;
`;

export default ModeSwitch;
