import React from "react";

import custom from "../styles/custom.css";
import milligram from "../styles/milligram.css";

/*
 * Demostrates a simple pure functional component
 */

export const DemoButtons = () => (
  <div>
    <h6 styleName={"custom.docs-header"}>
      demo CSS modules with buttons from <a href="http://milligram.io/">milligram</a>
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
