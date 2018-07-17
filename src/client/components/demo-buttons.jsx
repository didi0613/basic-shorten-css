import React from "react";
import "../styles/milligram.scss";
import "../styles/custom.scss";

/*
 * Demostrates a simple pure functional component
 */

export const DemoButtons = () => (
  <div>
    <h6 className={"docs-header"}>
      demo CSS modules with buttons from <a href="http://getskeleton.com/">skeleton</a>
    </h6>
    <div className={"docs-example"}>
      <a className={"button"} href="#">
        Anchor button
      </a>
      <button>Button element</button>
      <input type="submit" value="submit input" />
      <input type="button" value="button input" />
    </div>
    <div className={"docs-example"}>
      <a className={"button button-outline"} href="#">
        Anchor button
      </a>
      <button className={"button-outline"}>Button element</button>
      <input className={"button-outline"} type="submit" value="submit input" />
      <input className={"button-outline"} type="button" value="button input" />
    </div>
  </div>
);
