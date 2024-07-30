import { typeOf } from '../utils';
import { randomNumber } from '../utils';

function DataBinding({ statusMessages }) {
  // let randomNum = Math.floor(Math.random() * 4);
  const statusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

// JSX runtime (classic): React.createElement(React.Fragment, props, children)
// JSX runtime (automatic): jsx(React.Fragment, props)

export default DataBinding;

// 컴포넌트 속성 타입 검사
// Prop Types Validation

// 리액트가 제공하는 방법
// Component.protoTypes

DataBinding.propTypes = {
  statusMessages(props, propName, componentName) {
    // 컴포넌트 속성의 값은?
    const propValue = props[propName];

    // 컴포넌트 속성 값의 타입은? (문자 값을 원해~)
    const propType = typeOf(propValue);

    // 허용할 데이터 타입의 이름은?
    const allowedType = 'array';

    // 검사 수행
    if (propType !== allowedType) {
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
      );
    }
  },
};
