import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axiosClient from "../../api/axiosClient";
import { userActions } from "../../redux/actions/userActions";
import AccountInformation from "./AccountInformation";
import MyBooks from "./MyBooks";
import Report from "./Report";
import { AccountDetail, Body, BodyContent, Header } from "./style";
import TagFavorites from "./TagFavorites";

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
