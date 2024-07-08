import * as D from '../data';

export default function Tailwindcss() {
  return (
    <div className='bg-black/70'>
      <p className='w-full p-4 text-3cl text-white'>Tailwindcss</p>
      <p className='italic tect-gray-50 line-clamp-3'>
        {/* 세줄 빼고 clamp 잘라버린다. */}
        {D.randomParagraphs(10)}
      </p>
      <button className='btn btn-primary' style={{ textTransform: 'none' }}>
        Button
      </button>
    </div>
  );
}
