/*
 * This is a demo component the Eletrode app generator included
 * to show using Skeleton CSS lib (named base.css) and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from "react";

import DemoStates from "./demo-states";
import DemoPureStates from "./demo-pure-states";
import { DemoButtons } from "./demo-buttons";

import "../styles/custom.css";
import electrodePng from "../images/electrode.png";

export default () => (
  <div styleName={"container"}>
    <section styleName={"header"}>
      <h2>
        <span>Hello from </span>
        <a href="https://github.com/electrode-io">
          {"Electrode"}
          <img src={electrodePng} />
        </a>
      </h2>
    </section>

    <div styleName={"docs-section"}>
      <DemoStates />
    </div>

    <div styleName={"docs-section"}>
      <DemoPureStates />
    </div>

    <div styleName={"docs-section"}>
      <DemoButtons />
    </div>
  </div>
);
