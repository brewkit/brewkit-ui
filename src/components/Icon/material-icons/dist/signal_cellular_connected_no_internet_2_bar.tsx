import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path fill-opacity=".3" d="M22 8V2L2 22h16V8h4z" />
            <path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
        </React.Fragment>
    );
}

export default SVG;
