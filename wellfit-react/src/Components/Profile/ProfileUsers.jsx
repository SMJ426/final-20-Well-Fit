import React from 'react';
import styled from 'styled-components';

const StyledProfileUsers = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  padding: 30px 0;
  gap: 16px;

  & .profile-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  & .followers,
  .followings {
    text-align: center;
    padding-bottom: 6px;
  }
  & .followers.count {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }
  & .content {
    color: #767676;
    font-size: 10px;
    font-weight: 400;
  }
  & .followings.count {
    font-size: 18px;
    font-weight: 700;
    color: #767676;
  }

  /* 이름, 계정, 소개 부분 */
  & .profile-data-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .content-name {
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 6px;
  }
  & .content-accountName {
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 16px;
  }
  & .content-explain {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 16px;
  }

  /* 채팅, 팔로우, 공유 버튼 */
  & .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  & .btn-chatting,
  .btn-share {
    width: 34px;
    height: 34px;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
  }
  & .btn-follow {
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background: #515fec;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
  & .btn-follow:active {
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background: #515fec;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
  }
`;

export default function ProfileUsers() {
  return (
    <StyledProfileUsers>
      {/* 팔로워 프로필 팔로잉 */}
      <div className="profile-wrapper">
        <span className="span-followers">
          <p className="followers count">2950</p>
          <p className="followers content">followers</p>
        </span>
        <img src="../../../../images/basic-profile.svg" alt="프로필로고" />
        <span className="span-followings">
          <p className="followings count">128</p>
          <p className="followings content">followings</p>
        </span>
      </div>

      {/* 이름, 계정, 소개 부분 */}
      <h2 className="a11y-hidden">이름, 계정, 소개 부분</h2>
      <div className="profile-data-wrapper">
        <span className="content-name">웰핏 헬스공장</span>
        <span className="content-accountName">@wellfit_MINJAE</span>
        <span className="content-explain">
          엘핏 스포츠 강습권, 전국 거래, 저렴한 강습권
        </span>
      </div>

      {/* 채팅, 팔로우, 공유 버튼 */}
      <h2 className="a11y-hidden">채팅, 팔로우, 공유 버튼</h2>
      <div className="btn-wrapper">
        <button type="button" className="btn-chatting">
          <img
            src="../../../../images/icon-message-circle-1.svg"
            alt="채팅 하기"
          />
        </button>
        <button type="submit" className="btn-follow">
          팔로우
        </button>
        <button type="button" className="btn-share">
          <img src="../../../../images/icon-share.svg" alt="공유 하기" />
        </button>
      </div>
    </StyledProfileUsers>
  );
}