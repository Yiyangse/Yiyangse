import type { FC } from 'react';
import type { DivProps } from '../components';
import { Div, Icon } from '../components';
import * as D from '../data';
import User from './User';

export type CardProps = DivProps & {
  card: D.ICard;
};

const Card: FC<CardProps> = ({ card, ...props }) => {
  const { writer, image, title, paragraphs, dayMonthYearDate, relativeDate } =
    card;
  const icons = ['home', 'search', 'settings', 'favorite'].map((name) => (
    <Icon key={name} name={name} className='mr-2 text-3xl' />
  ));
  return (
    <Div {...props}>
      <div className='flex flex-col rounded-3xl overflow-hidden border-black shadow-2xl mb-4 ml-4'>
        <Div src={image} className='h-60' />
        <Div className='p-4' height='auto'>
          <p className='mt-2 text-3xl text-center text-bold'>{title}</p>
          <Div className='flex justify-between '>
            <User user={writer} className='text-left m-0' />
            <Div className='text-right'>
              <p className='text-gray-500'>{relativeDate}</p>
              <p className='text-gray-500'>{dayMonthYearDate}</p>
            </Div>
          </Div>
          <p className='mt-2 line-clamp-4'>{paragraphs}</p>
          <Div className='flex flex-row items-center justify-between p-1 mt-2 text-red-500'>
            {icons}
          </Div>
        </Div>
      </div>
    </Div>
  );
};
export default Card;
