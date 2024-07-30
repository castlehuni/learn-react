import { isTrueOrFalse, typeOf } from '../utils';
import reactImagePath from '../assets/react.svg?url';
import viteImagePath from '../assets/vite.svg?url';
import nextJsImagePath from '../assets/next-js.svg?url';
import kakaoTalkImagePath from '../assets/kakao-talk.svg?url';

const IMAGE_TYPES = ['react', 'vite', 'next.js', 'kakao talk'];

function ConditionalRendering({ imageType }) {
  // 조건부 렌더링
  // 함수 몸체 (function body) 영역 안에서
  // 조건에 따라 렌더링 결과가 달라짐
  let imagePath = '';
  let printText = '';

  switch (imageType.toLowerCase()) {
    case 'react':
      imagePath = reactImagePath;
      printText = 'React';
      break;
    case 'vite':
      imagePath = viteImagePath;
      printText = 'Vite';
      break;
    case 'next.js':
      imagePath = nextJsImagePath;
      printText = 'Next.js';
      break;
    case 'kakao talk':
      imagePath = kakaoTalkImagePath;
      printText = 'Kakao Talk';
      break;
    default:
      printText = '허용된 이미지 타입이 존재하지 않습니다.';
  }

  // if (imageType.toLowerCase().includes('react')) {
  //   imagePath = reactImagePath;
  //   printText = 'React';
  // }

  // if (imageType.toLowerCase().includes('vite')) {
  //   imagePath = viteImagePath;
  //   printText = 'Vite';
  // }

  // if (imageType.toLowerCase().includes('next.js')) {
  //   imagePath = nextJsImagePath;
  //   printText = 'Next.js';
  // }

  // if (imageType.toLowerCase().includes('kakao talk')) {
  //   imagePath = kakaoTalkImagePath;
  //   printText = 'Kakao Talk';
  // }

  const spinnerOrVite = isTrueOrFalse() ? (
    <img className="spinner" src="/icons/spinner.svg" alt="로딩 중..." />
  ) : (
    <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
  );

  return (
    <>
      <dt>
        조건부 렌더링(conditional rendering)({isTrueOrFalse() && '스피너 표시'})
      </dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
          <img src={imagePath} alt="" />
          {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
          <p>{printText}</p>
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">
          {/* {randomNumber(0, 1) > 0.5 ? (
            <img
              className="spinner"
              src="/icons/spinner.svg"
              alt="로딩 중..."
            />
          ) : (
            <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
          )} */}
          {spinnerOrVite}
        </div>
      </dd>
    </>
  );
}

export default ConditionalRendering;

ConditionalRendering.propTypes = {
  imageType(props, propName, componentName) {
    const propValue = props[propName];
    const propType = typeOf(propValue);
    const allowedType = 'string';
    const typeMatchString = IMAGE_TYPES.reduce((result, type, index, array) => {
      const divider = index < array.length - 1 ? '|' : '';
      return result + type + divider;
    }, '');

    const typeMatch = new RegExp(`^(${typeMatchString})$`, 'i');

    // 타입 검사
    if (propType !== allowedType || !typeMatch.test(propValue)) {
      // 타입이 다르면 오류 처리
      throw new Error(
        // `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
        `${componentName} 컴포넌트 ${propName} 속성에 설정 가능한 값은 "[${IMAGE_TYPES.toString()}]" 중 하나가 요구되나, 실제 전달된 속성 값은 "${propValue}"입니다.`
      );
    }

    // 그렇지 않으면 통과
  },
};

// {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
// 삼항 연산자로 내가 작성한 부분
// {imageType === 'react' ? (
//   <img src="/src/assets/react.svg" alt="리액트 로고" />
// ) : imageType === 'vite' ? (
//   <img src="/src/assets/vite.svg" alt="비트 로고" />
// ) : (
//   <p>일치하는 사진이 없습니다</p>
// )}
// {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
// {imageType === 'react' ? (
//   <p>React</p>
// ) : imageType === 'vite' ? (
//   <p>Vite</p>
// ) : (
//   <p>일치하는 텍스트가 없습니다</p>
// )}

{
  // 내가 작성한 코드
  /* <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
<div className="conditionalRendering">
  {randomNumber(0, 1) === 0 ? (
    <img
      className="spinner"
      src="/icons/spinner.svg"
      alt="로딩 중..."
    />
  ) : (
    <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
  )}
</div> */
}
