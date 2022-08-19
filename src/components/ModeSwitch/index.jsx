import React from "react";
import styled from "styled-components";
import { Switch } from "antd";
import { theme } from "../../constants/styles";

const ModeSwitch = ({ themeMode, setThemeMode }) => {
  const handleSwitchChange = () => {
    setThemeMode((prev) => (prev.label === "light" ? theme.dark : theme.light));
  };

  return (
    <ModeSwitchContainer>
      <Switch
        checkedChildren="Light"
        unCheckedChildren="Dark"
        defaultChecked={themeMode.label === "light"}
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
