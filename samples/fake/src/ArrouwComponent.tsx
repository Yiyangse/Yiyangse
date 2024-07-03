import type { FC } from 'react';
// Function Component의 약자
export type ArrowComponentProps = {
  href: string;
  text: string;
};

const ArrowComponent: FC<ArrowComponentProps> = (props) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default ArrowComponent;
