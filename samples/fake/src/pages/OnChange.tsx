import type { ChangeEvent } from 'react';

export default function CopyMe() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('onChangeValue', e.target.value);
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('onChangeChecked', e.target.value);
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('onChangeFiles', e.target.value);
  };

  return (
    <div>
      <p>OnChange</p>
      <div>
        <input
          type='text'
          onChange={onChangeValue}
          placeholder='type some test'
          defaultValue='Hello'
        />
        <input
          type='checkbox'
          onChange={onChangeChecked}
          value="I'm a checkbox"
          defaultChecked
        />
        <input
          type='file'
          onChange={onChangeFiles}
          multiple
          accept='images/*'
        />
      </div>
    </div>
  );
}
