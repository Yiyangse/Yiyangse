import { Title } from '../components';
import * as D from '../data';
import User from './User';

export default function UserContainer() {
  const children = D.makeArray(10)
    .map(D.makeRandomUser)
    .map((user) => (
      <User
        key={user.uuid}
        user={user}
        className={`justify-center m-2 bg-white text-xs border-2 border-blue-400 rounded`}
        // 'm-2 text-xs border-2'
        width='15rem'
      />
    ));

  return (
    <section className='mt-4'>
      <Title>UserContainer</Title>
      <div className='flex flex-wrap p-4 mt-4'>{children}</div>
    </section>
  );
}
