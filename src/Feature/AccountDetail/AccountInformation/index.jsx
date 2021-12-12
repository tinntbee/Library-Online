import { Grid, makeStyles } from "@material-ui/core";
import { FastField, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import imageAPI from "../../../api/imageAPI";
import userAPI from "../../../api/userAPI";
import { storage } from "../../../service/firebase";
import { filesService } from "../../../service/firebase/filesService";
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
const facultyOptions = [
  { value: "FIT", label: "Công nghệ thông tin" },
  { value: "UEL", label: "Kinh tế" },
];

function AccountInformation(props) {
  const classes = useStyles();
  const yesterday = new Date(Date.now() - 86400000);
  const user = useSelector((state) => state.user);

  const [data, setData] = useState({
    _id: "1",
    displayName: "",
    fullName: "",
    faculty: "",
    gender: "",
    email: "",
    dob: "2000-09-27",
    avatar: "",
    avatarGoogle: "",
  });

  const [state, setState] = useState({
    displayName: data.displayName,
    fullName: data.fullName,
    faculty: data.faculty,
    sex: data.gender,
    email: data.email,
    birthDay: data.dob,
    avatar: data.avatar,
  });

  const imageAvatarDefault = imageAPI.getAvatarDefaults();
  const FORM_VALIDATION = yup.object().shape({
    displayName: yup
      .string("Tên hiển thị với người dùng khác")
      .trim()
      .required("Trường này là bắc buộc"),
    fullName: yup.string("Tên đầy đủ").required("Trường này là bắc buộc"),
    sex: yup.string("Giới tính của bạn").required("Trường này là bắc buộc"),
    faculty: yup.string("Khoa đang học").required("Trường này là bắc buộc"),
    email: yup.string("Sử dụng mail sinh viên").email().required(),
    birthDay: yup
      .date()
      .max(yesterday, "please enter your day of birth")
      .required(),
    avatar: yup.string(),
  });
  const formik = useFormik({
    initialValues: state,
    validationSchema: FORM_VALIDATION,
    enableReinitialize: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //fetchAccount
  const fetchAccount = async () => {
    await userAPI.getAccountInfo().then((account) => {
      if (account) {
        setState({ ...state, ...account });
      }
    });
  };

  useEffect(() => {
    fetchAccount();
    console.log({ data });
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
      avatar: data.avatarGoogle,
    });
  };

  const handleAvatarInputChange = async (e) => {
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (acceptedImageTypes.includes(e.target.files[0].type)) {
      const pathName = "public/avatar-image/";
      const fileName = `user_${data._id}`;
      filesService.uploadFile(
        pathName,
        fileName,
        e.target.files[0],
        (url) => {
          setState({
            ...state,
            avatar: url.toString(),
          });
        },
        (progress) => {
          console.log("Upload is " + progress + "% done");
        }
      );
    }
  };
  const handleFormSubmit = () => {
    formik.values.avatar = state.avatar === "" ? state.avatar : state.avatar;
    formik.handleSubmit();
  };

  return (
    <AccountInformationContainer>
      <Title>
        <p>
          <b>INFORMATION</b>
        </p>
      </Title>
      <Content>
        <AvatarContainer>
          <p className="part">Avatar</p>
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
              <input type="file" onChange={handleAvatarInputChange} />
            </div>
            <div
              className="avatar-box"
              style={user && { backgroundImage: `url(${state.avatar})` }}
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
                    name="fullName"
                    label="Full name"
                  />
                </Grid>
                <Grid item xs={4} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="displayName"
                    label="Display Name"
                  />
                </Grid>
                <Grid item xs={8} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="email"
                    label="Email"
                    disabled
                  />
                </Grid>

                <Grid item xs={4} className={classes.field}>
                  <FastField
                    component={InputField}
                    name="birthDay"
                    label="Birthday"
                    type="date"
                  />
                </Grid>
                <Grid item xs={8} className={classes.field}>
                  <FastField
                    component={SelectField}
                    name="faculty"
                    label="Faculty"
                    options={facultyOptions}
                  />
                </Grid>
                <Grid item xs={4} className={classes.field}>
                  <FastField
                    component={SelectField}
                    name="sex"
                    label="Sex"
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
