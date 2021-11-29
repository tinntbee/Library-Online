import React from "react";
import PropTypes from "prop-types";
import { AccountDetail, BodyContent, Body, Header } from "./style";
import TagFavorites from "./TagFavorites";
import AccountInformation from "./AccountInformation";
import MyBooks from "./MyBooks";
import Report from "./Report";
import { useSelector } from "react-redux";

AccountDetailFeature.propTypes = {};

function AccountDetailFeature(props) {
  const hoa = useSelector((state) => state.user.user.hoa);
  return (
    <AccountDetail className="main-content">
      <Header>
        <p className="title">ABOUT MEE</p>
        <p className="hoa">${hoa}</p>
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
