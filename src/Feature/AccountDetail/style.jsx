import styled from "styled-components";

export const AccountDetail = styled.div`
  & .body .body-content div {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;

export const Title = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 2px solid var(--base-gray-color);
  padding-left: 10px;
  text-align: left;
  & > p {
    font-size: 18px;
    color: var(--text-gray100-color);
    line-height: 50px;
  }
`;

export const Header = styled.div`
  width: calc(100% - 62px);
  height: 55px;
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  border-bottom: 1px solid var(--base-gray-color);

  & > .hoa {
    position: absolute;
    font-size: medium;
    color: var(--primary-color-orange);
    font-weight: 700;
    bottom: auto;
    right: 20px;
  }
`;

export const Body = styled.div`
  background: var(--base-gray-color);
  width: 100%;
  height: 100%;
  padding-top: 55px;
  position: relative;
  overflow: hidden;
`;

export const BodyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 10px 30px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const TagFavoritesContainer = styled.div`
  width: 477px;
  min-width: 477px;
  height: 442px;
  margin: 10px !important;
  background: var(--white-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const AccountInformationContainer = styled.div`
  width: 834px;
  min-width: 834px;
  max-width: 834px;
  height: 442px;
  margin: 10px !important;
  background: var(--white-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const MyBooksContainer = styled.div`
  width: 477px;
  min-width: 477px;
  height: 442px;
  margin: 10px !important;
  background: transparent;
  border-radius: 10px;
  position: relative;

  & > div {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 300px;
    height: 100%;
    border-radius: 10px;
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    transition: all 0.6s ease-in-out;
  }

  & > .book-position__1 {
    right: 0;
    z-index: 5;
  }

  & > .book-position__2 {
    right: 60px;
    opacity: 0.8;
    z-index: 4;
    transform: translateY(-50%) scale(0.9);
  }

  & > .book-position__3 {
    right: 120px;
    transform: translateY(-50%) scale(0.8);
    opacity: 0.7;
    z-index: 3;
  }

  & > .book-position__4 {
    right: 170px;
    transform: translateY(-50%) scale(0.7);
    z-index: 2;
    opacity: 0.5;
  }

  & > .book-position__5,
  .book-position__6 {
    right: 210px;
    transform: translateY(-50%) scale(0.6);
    opacity: 0.3;
    z-index: 1;
  }

  & > .book-position__6 {
    z-index: 0;
  }
`;

export const ReportContainer = styled(AccountInformationContainer)``;

export const AvatarContainer = styled.div`
  height: 100%;
  width: 256px;
  min-width: 256px;
  border-right: 2px solid var(--base-gray-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > p.part {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-gray100-color);
    line-height: 16px;
  }

  & > .avatar {
    height: 144px;
    width: 144px;
    border-radius: 20px;
    background: var(--text-gray50-color);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    & > .avatar-checked {
      height: 100%;
      width: 100%auto;
      border-radius: 20px;
      background: transparent;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  & > .controller {
    height: 160px;
    width: 212px;
    border: 2px dashed var(--text-gray50-color);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
    justify-content: space-between;

    & > .avatar-box {
      height: 40px;
      width: 40px;
      background: var(--text-gray50-color);
      border-radius: 10px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid var(--text-gray50-color);
      cursor: pointer;
      transition: all 0.2s linear;

      & > input {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      &:hover {
        filter: brightness(90%);
      }
    }

    & > .avatar-box.upload {
      background-image: url("icons/upload.svg");
      background-size: 14px 17px;
    }
  }
`;

export const InformationContainer = styled.div`
  height: 100%;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & p.part {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-gray100-color);
    line-height: 16px;
    text-align: left;
    margin-bottom: 5px;
  }

  & .connect-account {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > .button-bee {
      margin-left: auto;
      margin-right: 0;
    }
  }

  & > .footer-control {
    text-align: right;

    & > .button-bee.contained {
      margin: 0;
    }
  }
`;
