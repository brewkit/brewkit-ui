import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path
                d="M9 19c-1 0-4-3-4-4 0-.333.333-1 1-2l-4-1 2-3 4 1c4-6 10-8 14-8 0 4-2 10-8 14l1 4-3 2-1-4c-1 .667-1.667 1-2 1zm-.96-3.04c.354.355.719.672 1.023.89.223-.124.501-.296.828-.514l3-2c3.898-2.6 6.239-6.416 6.908-10.135-3.719.67-7.536 3.01-10.135 6.908l-2 3c-.218.327-.39.605-.515.828.22.304.536.67.89 1.024z"
                fill-rule="evenodd"
            />
            <circle cx="15.5" cy="8.5" r="1.5" fill-rule="evenodd" />
            <path
                d="M4 16l1 1.5c-.667.667-1 1.5-1 2.5 1 0 1.833-.333 2.5-1L8 20c-1.333 1.333-3.333 2-6 2 0-2.667.667-4.667 2-6z"
                fill-rule="evenodd"
            />
        </React.Fragment>
    );
}

export default SVG;
