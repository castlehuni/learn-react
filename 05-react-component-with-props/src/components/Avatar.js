import React from "https://esm.sh/react";

// const Avatar = ({ pic, status }) => {
//   return React.createElement(
//     "div",
//     { className: "avartar" },
//     React.createElement("img", { src: pic, alt: "" }),
//     React.createElement("span", { className: status })
//   );
// };

function Avatar(props) {
  return React.createElement("figure", {
    className: "Avatar",
  });
}

export default Avatar;
