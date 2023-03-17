import {
  BottomContainer,
  Button,
  Ellipse,
  Followers, Img,
  Logo,
  Name,
  Picture,
  Rectangle,
  TopContainer,
  Tweets,
  User,
  Wrapper,
} from './Card.styled';
import { useEffect, useState } from 'react';
import logo from 'assets/logo.svg';

export const Card = ({ user }) => {
  const localUser = JSON.parse(localStorage.getItem(user.id));
  const [isFollowing, setIsFollowing] = useState(localUser ? localUser.isFollowing : false);
  const [followers, setFollowers] = useState(localUser ? localUser.followers : user.followers);

  const handleClick = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowers(followers + 1);
    } else {
      setIsFollowing(false);
      setFollowers(followers - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem(user.id, JSON.stringify({ isFollowing, followers }));
  }, [isFollowing]);

  return (
    <Wrapper>
      <TopContainer>
        <Logo src={logo} alt='Логотип' />
        <Picture />
      </TopContainer>
      <Rectangle>
        <Ellipse>
          <User><Img src={user.avatar}/></User>
        </Ellipse>
      </Rectangle>
      <BottomContainer>
        <Name>{user.user}</Name>
        <Tweets> {user.tweets} tweets</Tweets>
        <Followers>{followers.toLocaleString('en-US')} Followers</Followers>
        <div>
          <Button onClick={handleClick} style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}>
            {isFollowing ? 'Following' : 'Follow'}
          </Button>

        </div>
      </BottomContainer>
    </Wrapper>
  );
};
