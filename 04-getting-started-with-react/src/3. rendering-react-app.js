const listData = {
  items: [
    { id: "3", title: "Graphics" },
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "4", title: "Building design" },
  ],
};

// 반응성(Reactivity) 구현
// 개발자 -> 데이터 수정 -> 반응성(변경 감지) -> 리액트 -> 업데이트 구현

// React 리스트 랜더링
// Array.prototype.map 매서드 활용
const children = listData.items.map((item) => {
  const itemElement = React.createElement(
    "li",
    {
      className: "item",
    },
    React.createElement("img", {
      src: `/architectures/architecture-${item.id}.jpg`,
      alt: "",
    }),
    React.createElement(
      "span",
      {
        className: "content",
      },
      `${item.title}`
    ),
    React.createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      React.createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

// TODO:
// React API를 사용해 <li></li> React 엘리먼트 생성
// const itemlist = React.createElement(
//   "li",
//   {
//     className: "item",
//   },
//   React.createElement("img", {
//     src: "/architectures/architecture-1.jpg",
//     alt: "",
//   }),
//   React.createElement(
//     "span",
//     {
//       className: "content",
//     },
//     "Climatology"
//   ),
//   React.createElement(
//     "button",
//     {
//       type: "button",
//       title: "아이템 이동 (위/아래 화살표 키 활용)",
//     },
//     React.createElement("img", {
//       src: "/icons/handle.svg",
//       alt: "아이템 이동 (위/아래 화살표 키 활용)",
//     })
//   )
// );

// const children = [itemlist];

// React.createElement API
// <ul></ul> 리액트 엘리먼트 생성
const list = React.createElement(
  "ul",
  { className: "architectures", lang: "en" },
  // children
  ...children
);

// 리액트 요소(React Element === 가상 DOM 요소 노드) 생성
console.log(list);

// React.isValidElement API
console.log(React.isValidElement(list));

// 리액트 앱 렌더링 (그림을 그리다, 화면에 표시)
// ReactDOM / Server or [Client]
// ReactDOM.createRoot(container/* 실제 DOM 노드: 요소 노드 */)

const container = document.getElementById("root");

// ReactDOM Root 생성
const reactDomRoot = ReactDOM.createRoot(container);

function render() {
  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

render();
// // 특정 시간이 지나면, 앱을 화면에 랜더링(표시) 하세요.
// setTimeout(render, 3000);

// //특정 시간이 지나면, 랜더링된 앱을 화면에서 표시하지 마세요.
// setTimeout(unmount, 4000);
