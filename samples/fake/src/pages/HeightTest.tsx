import { Title, Div } from '../components';

export default function HeightTest() {
  return (
    <section className='mt-4'>
      <Title>HeightTest</Title>
      {/* 부모 Div를 text-center잡아두면 자식도 center정렬됨 */}
      <Div className='h-40 text-center bg-blue-500 mt-4'>
        <Div className='bg-blue-500 h-1/2'>
          <p className='text-center text-red-500'>h-1/2</p>
        </Div>
        <Div className='bg-red-500 h-1/2'>
          <p className='text-center text-red-500'>h-1/2</p>
        </Div>
      </Div>
    </section>
  );
}
