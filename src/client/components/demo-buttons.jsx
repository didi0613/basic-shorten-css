import React from "react";
import skeleton from "../styles/skeleton.css";
import custom from "../styles/custom.css";

/*
 * Demostrates a simple pure functional component
 */

export const DemoButtons = () => (
  <div>
    <h6 styleName={"custom.docs-header"}>
      demo CSS modules with buttons from <a href="http://getskeleton.com/">skeleton</a>
    </h6>
    <div styleName={"custom.docs-example"}>
      <a styleName={"skeleton.button"} href="#">
        Anchor button
      </a>
      <button>Button element</button>
      <input type="submit" value="submit input" />
      <input type="button" value="button input" />
    </div>
    <div styleName={"custom.docs-example"}>
      <a styleName={"skeleton.button skeleton.button-primary"} href="#">
        Anchor button
      </a>
      <button styleName={"skeleton.button-primary"}>Button element</button>
      <input styleName={"skeleton.button-primary"} type="submit" value="submit input" />
      <input styleName={"skeleton.button-primary"} type="button" value="button input" />
    </div>
  </div>
);
