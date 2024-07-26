import { createElement as h } from "https://esm.sh/react";
import Avatar from "../components/Avatar.js";

// const AvartarPage = () => {
//   return React.createElement(
//     "div",
//     { className: "avatarContainer" },
//     React.createElement(Avatar, {
//       pic: "../../public/avatars/man-1.jpg",
//       status: "offline",
//     }),
//     React.createElement(Avatar, {
//       pic: "../../public/avatars/woman-1.jpg",
//       status: "online",
//     }),
//     React.createElement(Avatar, {
//       pic: "../../public/avatars/man-2.jpg",
//       status: "doNotDisturb",
//     }),
//     React.createElement(Avatar, {
//       pic: "../../public/avatars/woman-2.jpg",
//       status: "away",
//     })
//   );
// };

function AvartarPage() {
  return h(
    "ul",
    {
      className: "AvatarList",
    },
    h(
      "li",
      null,
      h(Avatar, { name: "야무", photo: "man-02.jpg", status: "online" })
    ),
    h(
      "li",
      null,
      h(Avatar, { name: "범쌤", photo: "man-04.jpg", status: "away" })
    )
  );
}
export default AvartarPage;
