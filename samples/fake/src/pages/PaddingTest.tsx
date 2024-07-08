import { Title } from '../components';
import * as D from '../data';

const sentense = D.randomSentence(10);

export default function PaddingTest() {
  return (
    <section className='mt-4'>
      <Title>PaddingTest</Title>
      {/* margin, border, Padding 박스모델 실습 */}
      {/* <div className='m-8'>
        <div className='text-black text-center bg-orange-400'>
          <h2>
            marginTest
            <p>{sentense}</p>
          </h2>
        </div>
      </div>
      <div className='border-8'>
        <div className='text-black text-center bg-yellow-300'>
          <h3>
            BorderTest
            <p>{sentense}</p>
          </h3>
        </div> */}
      <div className='p-8'>
        <div className='text-white bg-green-300'>
          <h4>{sentense}</h4>
        </div>
        <div className='p-8 text-white bg-orange-600'>
          <h5 className='text-white'>{sentense}</h5>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
