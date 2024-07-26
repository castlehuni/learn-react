import React from "https://esm.sh/react";

// React 함수 컴포넌트(Functional Component)
function ArchitectureList(props) {
  // 컴포넌트 속성 확인
  // console.log(props);
  const { lang, children } = props;

  // 리액트 엘리먼트(React Element) 반환
  return React.createElement(
    "ul",
    { className: "architectures", lang },
    children
  );
}

export default ArchitectureList;
