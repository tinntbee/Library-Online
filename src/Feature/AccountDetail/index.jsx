import React from "react";
import PropTypes from "prop-types";
import { AccountDetail, BodyContent, Body, Header } from "./style";
import TagFavorites from "./TagFavorites";
import AccountInformation from "./AccountInformation";
import MyBooks from "./MyBooks";
import Report from "./Report";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../../redux/actions/userActions";
import axiosClient from "../../api/axiosClient";

AccountDetailFeature.propTypes = {};

function AccountDetailFeature(props) {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    const url = "/accounts/logout";
    axiosClient.get(url);
    dispatch(userActions.signOut());
    history.push("/login");
  };
  return (
    <AccountDetail className="main-content">
      <Header>
        <p className="title">ABOUT MEE</p>
        {user && (
          <button
            className="logout button-bee contained"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        )}
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
