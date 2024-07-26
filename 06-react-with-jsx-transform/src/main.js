import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
// import AvartarPage from "./pages/AvartarPage.js";

const container = document.getElementById("react-app");

function Avatar({ name, photo, status = "offline", size = 64 }) {
  let iconPath = "";
  let statusMessage = "";

  switch (status) {
    default:
    case "offline":
      iconPath = "/svg-icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/svg-icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/svg-icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "/svg-icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }

  const label = `${name} (${statusMessage})`;

  // JSX
  return (
    <figure className="Avatar" aria-label={label} title={label}>
      <img src={`/faces/${photo}`} alt={name} width={size} height={size} />
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
  );
}

function AvatarListPage() {
  // JSX
  return (
    <ul className="AvatarList">
      <li>
        <Avatar name="야무" photo="man-02.jpg" status="online" />
      </li>
      <li>
        <Avatar name="범쌤" photo="man-04.jpg" status="away" />
      </li>
      <li>
        <Avatar name="주원" photo="woman-04.jpg" status="dont-disturb" />
      </li>
      <li>
        <Avatar name="정민" photo="woman-01.jpg" />
      </li>
    </ul>
  );
}

if (container) {
  createRoot(container).render(<AvatarListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
