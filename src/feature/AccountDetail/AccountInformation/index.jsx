import { Grid, makeStyles } from "@material-ui/core";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { FastField, FormikProvider, useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axiosClient from "../../../api/axiosClient";
import imageAPI from "../../../api/imageAPI";
import userAPI from "../../../api/userAPI";
import { userActions } from "../../../redux/actions/userActions";
import { filesService } from "../../../service/firebase/filesService";
import { facultyOptions } from "../../../utils/facultyList";
import {
  AccountInformationContainer,
  AvatarContainer,
  Content,
  InformationContainer,
  Title,
} from "../style";
import InputField from "./InputField";
import SelectField from "./SelectField";

AccountInformation.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px 0",
  },
  field: {
    fontSize: "16px",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    "& label.Mui-focused": {
      color: "#545454",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#545454",
    },
    "& .MuiOutlinedInput-root": {
      // '& fieldset': {
      //   borderColor: 'red',
      // },
      "&:hover fieldset": {
        borderColor: "#545454",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#545454",
      },
    },
  },
}));
const sexOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

function AccountInformation(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const yesterday = new Date(Date.now() - 86400000);
  const user = useSelector((state) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    _id: "1",
    nickname: "",
    name: "",
    faculty: "",
    gender: "",
    email: "",
    dob: "",
    avatar: "",
    avatarGoogle: "",
  });
  const [loading, setLoading] = useState(false);

  const imageAvatarDefault = imageAPI.getAvatarDefaults();
  const FORM_VALIDATION = yup.object().shape({
    nickname: yup.string("Tên hiển thị với người dùng khác").trim(),
    name: yup.string("Tên đầy đủ").required(),
    gender: yup.string("Giới tính của bạn").required(),
    faculty: yup.string("Khoa đang học").required(),
    email: yup.string("Sử dụng mail sinh viên").email().required(),
    dob: yup.date().max(yesterday, "please enter your day of birth").required(),
    avatar: yup.string(),
  });
  const formik = useFormik({
    initialValues: state,
    validationSchema: FORM_VALIDATION,
    enableReinitialize: true,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      fetchUpdateAccount(values);
    },
  });

  //fetchAccount
  const fetchAccount = async () => {
    setLoading(true);
    await userAPI
      .getAccountInfo()
      .then((account) => {
        // alert(JSON.stringify(account, null, 2));
        if (account) {
          setState({
            ...state,
            _id: account._id,
            name: account.name,
            nickname: account.nickname,
            avatar: account.avatar,
            dob: account.dob.slice(0, 10),
            email: account.email,
            gender: account.gender,
            faculty: account.faculty,
            avatarGoogle: account.avatarGoogle,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          setLoading(false);
          enqueueSnackbar("Bạn cần phải đăng nhập", { variant: "warning" });
          dispatch(userActions.reSign());
          history.push("/login");
        }
      });
  };

  const fetchUpdateAccount = async (data) => {
    const { nickname, faculty, name, avatar, dob, gender } = data;
    const url = "/accounts";
    setLoading(true);
    axiosClient
      .put(url, {
        nickname,
        faculty,
        name,
        avatar,
        dob,
        gender,
      })
      .then((res) => {
        // console.log({ res });
        setLoading(false);
        enqueueSnackbar("Cập nhật thành công", { variant: "success" });
        dispatch(userActions.reSign());
      })
      .catch((e) =>
        enqueueSnackbar("Có lỗi đã sảy ra :<", { variant: "error" })
      );
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  const handleAvatarDefaultClick = (index) => {
    setState({
      ...state,
      avatar: imageAvatarDefault[index].url,
    });
  };

  const handleAvatarGoogleClick = () => {
    setState({
      ...state,
      avatar: state.avatarGoogle,
    });
  };

  const handleAvatarInputChange = async (e) => {
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    try {
      if (acceptedImageTypes.includes(e.target.files[0].type)) {
        const pathName = `public/user-${state._id}/`;
        const fileName = `avatar-${Date.now()}`;
        try {
          const url = await filesService.uploadTaskPromise(
            pathName + fileName,
            e.target.files[0]
          );
          setState({
            ...state,
            avatar: url.toString(),
          });
        } catch (e) {
          console.log({ e });
        }
      }
    } catch (error) {
      enqueueSnackbar("Tải ảnh lên thất bại", {
        variant: "error",
      });
    }
  };
  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <AccountInformationContainer>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Title>
        <p>
          <b>CÁ NHÂN</b>
        </p>
      </Title>
      <Content>
        <AvatarContainer>
          <p className="part">Ảnh đại diện</p>
          <div
            className="avatar"
            style={user && { backgroundImage: `url(${state.avatar})` }}
          >
            <div
              className="avatar-checked"
              style={user && { backgroundImage: `url(${state.avatar})` }}
            />
          </div>
          <div className="controller">
            <div className="avatar-box upload">
              <input
                type="file"
                accept={".jpg,.png,.gif"}
                onChange={handleAvatarInputChange}
              />
            </div>
            <div
              className="avatar-box"
              style={user && { backgroundImage: `url(${state.avatarGoogle})` }}
              onClick={handleAvatarGoogleClick}
            />

            {imageAvatarDefault &&
              imageAvatarDefault.map((item, index) => {
                return (
                  <div
                    key={item._id}
                    className="avatar-box"
                    style={{ backgroundImage: `url(${item.url})` }}
                    onClick={() => handleAvatarDefaultClick(index)}
                  />
                );
              })}
          </div>
        </AvatarContainer>
        <InformationContainer>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <p className="part">Thông tin người dùng</p>
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={8} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="name"
                    label="Họ và tên"
                    disabled
                  />
                </Grid>
                <Grid item xs={4} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="nickname"
                    label="Tên hiển thị"
                  />
                </Grid>
                <Grid item xs={8} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="email"
                    label="Địa chỉ email"
                    disabled
                  />
                </Grid>

                <Grid item xs={4} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="dob"
                    label="Ngày Sinh"
                    type="date"
                  />
                </Grid>
                <Grid item xs={8} className={classes.field}>
                  <FastField
                    component={SelectField}
                    name="faculty"
                    label="Khoa"
                    options={facultyOptions}
                    disabled
                  />
                </Grid>
                <Grid item xs={4} className={classes.field}>
                  <FastField
                    component={SelectField}
                    name="gender"
                    label="Giới tính"
                    options={sexOptions}
                  />
                </Grid>
              </Grid>
              <p className="part">Liên kết tài khoản</p>
              <div className="connect-account">
                <a href="#">Facebook</a>
                <button className="button-bee outline small" type="button">
                  Sign in
                </button>
              </div>
            </form>
            <div className="footer-control">
              <button className="button-bee outline small">Hủy</button>
              <button
                className="button-bee contained small"
                onClick={handleFormSubmit}
              >
                Lưu thay đổi
              </button>
            </div>
          </FormikProvider>
        </InformationContainer>
      </Content>
    </AccountInformationContainer>
  );
}

export default AccountInformation;
