import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <circle cx="12" cy="19" r="2" />
            <path d="M10 3h4v12h-4z" />
        </React.Fragment>
    );
}

export default SVG;
