import type { FC, PropsWithChildren } from 'react';
// PProps 매개변수 넘겨준다.
export type PProps = {};
// <>안에 넣어준다
const P: FC<PropsWithChildren<PProps>> = (props) => {
  return <p {...props} />;
};

export default P;

// import type { FC, ReactNode } from 'react';
// // PProps 매개변수 넘겨준다.
// export type PProps = {
//   children?: ReactNode;
// };
// // <>안에 넣어준다
// const P: FC<PProps> = (props) => {
//   const { children } = props;
//   return <p children={children} />;
// };

// export default P;
