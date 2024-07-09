import { Title } from '../components';
import * as D from '../data';
import Card from './Card';

export default function CardContainer() {
  const children = D.makeArray(10)
    .map(D.makeRandomCard)
    .map((card) => (
      <Card
        key={card.uuid}
        card={card}
        className='flex flex-row'
        width='30rem'
      />
    ));

  return (
    <section className='mt-4'>
      <Title>CardContainer</Title>
      <div className='flex flex-wrap justify-center mt-4 p-3'>{children}</div>
    </section>
  );
}
