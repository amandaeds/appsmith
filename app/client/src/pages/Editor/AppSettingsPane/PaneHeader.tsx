import { closeAppSettingsPaneAction } from "actions/appSettingsPaneActions";
import { Icon, IconSize } from "design-system";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 48px;
  padding: 10px 16px 12px;
  box-shadow: 0 1px 0 0 #d7d7d7;
`;

const StyledText = styled.div`
  font-size: 16px;
`;

class PaneHeader extends React.Component<{
  closePane: () => void;
}> {
  render() {
    return (
      <StyledHeader className="flex justify-start items-center">
        <Icon
          className="pr-2"
          fillColor="#090707"
          name="double-arrow-right"
          onClick={this.props.closePane}
          size={IconSize.SMALL}
        />
        <StyledText>Settings</StyledText>
      </StyledHeader>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closePane: () => {
    dispatch(closeAppSettingsPaneAction());
  },
});

export default connect(null, mapDispatchToProps)(PaneHeader);
