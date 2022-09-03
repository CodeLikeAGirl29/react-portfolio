import React from "react";
import classNames from 'classnames'

const Spinner = props => (
  <div className={classNames("-loading", { "active -active": props.loading })}>
    <div id="spinner" style={{ top: "50%", left: "50%" }}>
      <i
        className="fa fa-spinner fa-pulse fa-3x fa-fw"
        style={{ fontSize: 36, color: "#8D53FF" }}
      />
    </div>
  </div>
);

export default Spinner;
