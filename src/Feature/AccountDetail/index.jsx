import React from "react";
import PropTypes from "prop-types";
import { AccountDetail, BodyContent, Body, Header } from "./style";
import TagFavorites from "./TagFavorites";
import AccountInformation from "./AccountInformation";
import MyBooks from "./MyBooks";
import Report from "./Report";

AccountDetailFeature.propTypes = {};

function AccountDetailFeature(props) {
  return (
    <AccountDetail className="main-content">
      <Header>
        <p className="title">ABOUT MEE</p>
        <p className="hoa">$34</p>
      </Header>
      <Body>
        <BodyContent>
          <div>
            <MyBooks />
            <AccountInformation />
          </div>
          <div>
            <TagFavorites />
            <Report />
          </div>
        </BodyContent>
      </Body>
    </AccountDetail>
  );
}

export default AccountDetailFeature;
