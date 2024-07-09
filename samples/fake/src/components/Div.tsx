import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import type { WidthHeight } from './WidthHeight';
import { LeftRightTopBottom } from './LeftRightTopBottom';
import { MinMaxWidthHeight } from './MinMaxWidthHeight';

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & {
    src?: string;
  };

//prettier-ignore
//Div를 가져와서 쓸 때 파라미터를 추가하여 사용합니다.
export const Div: FC<DivProps> = ({
  width, height, style: _style, src, left, right, top, bottom, minWidth, maxWidth, minHeight, maxHeight, ...props
}) => {
  const style = {..._style, width, height, backgroundImage: src && `url(${src})`, left, right, top, bottom, minWidth, maxWidth, minHeight, maxHeight}
  return <div {...props} style={style}></div>
}
