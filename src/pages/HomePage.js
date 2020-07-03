import React from "react";
import "./homepage.styles.scss";

import Directory from "../components/directory-menu/directory";

export default function HomePage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
