import { useCallback, useState, useMemo } from 'react'; // React에서 필요한 훅들을 불러옵니다.
import { Title, Div } from '../components'; // 커스텀 컴포넌트인 Title과 Div를 불러옵니다.
import { Icon } from '../theme/daisyui'; // DaisyUI 테마에서 아이콘을 불러옵니다.
import * as D from '../data'; // 데이터 관련 함수들을 모듈 D에서 불러옵니다.

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]); // 이미지 목록을 담는 상태(images)와 그 상태를 변경하는 함수(setImages)를 정의합니다.

  // 이미지 추가 함수를 useCallback을 사용하여 메모이제이션합니다.
  const addImage = useCallback(
    () => setImages((images) => [D.randomImage(200, 100, 50), ...images]), // 새로운 이미지를 배열 맨 앞에 추가하는 로직입니다.
    [] // 의존성 배열이 비어있기 때문에, 이 함수는 컴포넌트가 처음 렌더링될 때만 생성됩니다.
  );

  // 이미지 모두 지우는 함수를 useCallback을 사용하여 메모이제이션합니다.
  const clearImages = useCallback(() => setImages((notUsed) => []), []); // 이미지 배열을 빈 배열로 설정하여 모든 이미지를 지웁니다.

  // useMemo를 사용하여 children 변수를 메모이제이션합니다.
  const children = useMemo(
    () =>
      images.map((image, index) => (
        <Div key={index} src={image} className='w-1/5 m-2' height='5rem' /> // 이미지를 표시하는 Div 컴포넌트를 생성합니다.
      )),
    [images] // 이미지 배열(images)이 변경될 때마다 children을 재계산합니다.
  );

  // JSX를 반환합니다.
  return (
    <section className='mt-4'>
      <Title>ArrayState</Title> {/* 페이지 제목을 나타내는 컴포넌트입니다. */}
      <div className='flex justify-center mt-4'>
        {/* 이미지 추가 아이콘 */}
        <div data-tip='add image' className=''>
          <Icon
            name='add'
            onClick={addImage} // 클릭 시 addImage 함수를 실행합니다.
            className='mr-12 btn-primary'
            iconClassName='text-3xl'
          />
        </div>
        {/* 이미지 모두 지우는 아이콘 */}
        <div data-tip='clear all' className=''>
          <Icon
            name='clear_all'
            onClick={clearImages} // 클릭 시 clearImages 함수를 실행합니다.
            iconClassName='text-3xl'
          />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>{children}</div>{' '}
      {/* 이미지 목록을 표시하는 부분입니다. */}
    </section>
  );
}
