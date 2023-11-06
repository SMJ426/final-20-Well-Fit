import React, { useState, useEffect } from 'react';
import HomeHeader from '../../Components/Home/HomeHeader';
import { styled } from 'styled-components';
import HomeContent from '../../Components/Home/HomeContent';
import Footer from '../../Components/common/Footer/Footer';
import HomeNonFeed from '../../Components/Home/HomeNonFeed';
import { getMyFollowList } from '../../api/GETMyFollowList';
import { getFollowedUserFeedList } from '../../api/GETFollowedFeedList';
import Loading from '../../Components/common/Loading/Loading';

const StyledHomePage = styled.div`
  width: 390px;
  height: 732px;
  margin: 0 auto;
  background-color: #fff;

  /* 게시물 많아지면 스크롤 생성 */
  overflow: auto;
`;

export default function PageHome() {
  // 내가 팔로우한 상대 게시물 상태
  const [followedUserFeedList, setFollowedUserFeedList] = useState(null);
  const [error, setError] = useState(null);
  // followList 상태
  const [hasFollowList, setHasFollowList] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('getUserProfileData 실행전');
        const myFollowList = await getMyFollowList();
        console.log('나의 팔로우 리스트');
        console.log(myFollowList);
        setHasFollowList(myFollowList.length !== 0);
        console.log('getUserProfileData 실행후');

        if (myFollowList.length !== 0) {
          console.log('followedUserFeedList 실행전');
          const feedList = await getFollowedUserFeedList();
          setFollowedUserFeedList(feedList.posts);
          console.log('followedUserFeedList 실행후');
        }
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  useEffect(() => {
    console.log(followedUserFeedList);
  }, [followedUserFeedList]);

  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }

  if (!followedUserFeedList) {
    return <Loading />;
  }
  return (
    <>
      <HomeHeader />
      <StyledHomePage>
        {hasFollowList ? (
          <HomeContent followedUserFeedList={followedUserFeedList} />
        ) : (
          <HomeNonFeed />
        )}
      </StyledHomePage>
      <Footer />
    </>
  );
}
