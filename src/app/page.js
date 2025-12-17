import React from "react";

import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

export default function Home() {
  return (
    <>
      <main className="grid xl:grid-cols-9 gap-3 lg:gap-6 xl:gap-3 relative">
        <LeftColumn />
        <RightColumn />
      </main>
    </>
  );
}
