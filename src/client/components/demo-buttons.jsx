import React from "react";
import milligram from "../styles/milligram.scss";
import custom from "../styles/custom.scss";

/*
 * Demostrates a simple pure functional component
 */

export const DemoButtons = () => (
  <div>
    <h6 styleName={"custom.docs-header"}>
      demo CSS modules with buttons from <a href="http://getskeleton.com/">skeleton</a>
    </h6>
    <div styleName={"custom.docs-example"}>
      <a styleName={"milligram.button"} href="#">
        Anchor button
      </a>
      <button>Button element</button>
      <input type="submit" value="submit input" />
      <input type="button" value="button input" />
    </div>
    <div styleName={"custom.docs-example"}>
      <a styleName={"milligram.button milligram.button-outline"} href="#">
        Anchor button
      </a>
      <button styleName={"milligram.button-outline"}>Button element</button>
      <input styleName={"milligram.button-outline"} type="submit" value="submit input" />
      <input styleName={"milligram.button-outline"} type="button" value="button input" />
    </div>
  </div>
);
