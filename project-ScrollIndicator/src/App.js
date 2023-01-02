import Content from "./Content";
import ScrollIndicator from "./ScrollIndicator";
import React from "react";
function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>خانه</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>بلاگ</li>
          </ul>
        </div>
      </header>
      <ScrollIndicator />
      <Content />
    </>
  );
}

export default App;
