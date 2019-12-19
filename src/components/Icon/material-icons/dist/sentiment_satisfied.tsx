import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c.73 0 1.38-.18 1.97-.53 1 1.13.04.06 1.01 1.15a5.49 5.49 0 0 1-5.95.01c.15-.17.89-1.01 1.01-1.15.58.34 1.23.52 1.96.52zm3.5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                fill-rule="nonzero"
            />
        </React.Fragment>
    );
}

export default SVG;
