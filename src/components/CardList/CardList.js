import users from './users.json';
import { Card } from '../Сard/Сard';
import { Wrapper } from './CardList.styled';

export const CardList = () => {
  return (
    <Wrapper>
      {
        users.users.map((user) => {
return <Card key={user.id} user={user} />
        })
      }
    </Wrapper>
  );
};
