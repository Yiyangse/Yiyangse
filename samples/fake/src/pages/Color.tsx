export default function Color() {
  return (
    <div className='bg-indigo-200'>
      <p className='w-full p-4 text-3xl text-white font-sans font-bold'>
        Hello color world
      </p>
      <div className='mb-4'>
        {/* text-2xl font-bold italic */}
        <p className='text-lime-300 text-2xl font-bold italic text-justify'>
          Email Address
        </p>
        <input
          type='email'
          className='text-gray-700  border-sky-200 border-20'
        ></input>
        <p className='text-rose-100'>This field is required</p>
      </div>
    </div>
  );
}
