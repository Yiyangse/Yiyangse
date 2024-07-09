import type { FC } from 'react';
import type { DivProps } from '../components';
import * as D from '../data';
import { Div, Avatar } from '../components';

export type UserProps = DivProps & {
  user: D.IUser;
};

const User: FC<UserProps> = ({ user, ...props }) => {
  const { name, email, jobTitle, avatar } = user;
  return (
    <Div {...props}>
      <div className='flex p-2 '>
        <Avatar src={avatar} size='2rem' />
        <div className='ml-2'>
          <p className='font-bold m-0'>{name}</p>
          <p className='text-gray-500 line-clamp-1 m-0'>{jobTitle}</p>
          <p className='text-blue-500 underline m-0'>{email}</p>
        </div>
      </div>
    </Div>
  );
};
export default User;
