import React, { FC, useEffect, useRef } from 'react';
// 이 컴포넌트는 항목 리스트를 전달받아 리스트로 랜더링한다.
export interface ListItem {
  id: number;
}

export interface ListItems {
  listItems?: Array<ListItem>;
}

const ListCreator: FC<ListItems> = React.memo(({ listItems }: ListItems) => {
  let renderItems = useRef<Array<JSX.Element> | undefined>();
  useEffect(() => {
    console.log('listItems updated');
    renderItems.current = listItems?.map((item, index) => {
      return <div key={item.id}>{item.id}</div>;
    });
  }, [listItems]);

  console.log('ListCreator render');
  return <React.Fragment>{renderItems.current}</React.Fragment>;
});

export default ListCreator;
