import { SyntheticEvent } from 'react';

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) =>
    console.log('click event bubbles on <div>');

  const onButtonClick = (e: SyntheticEvent) => {
    console.log('mouse click occures on <button> and call stopPropagation');
    e.stopPropagation();
  };

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click Me and event propagation</button>
    </div>
  );
}
