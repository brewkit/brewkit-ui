import React from 'react';
import { AppBar as MuiAppBar } from '@material-ui/core';
import { Toolbar as MuiToolbar } from '@material-ui/core';
import { Props } from './types';


/**
 * The `AppBar` component represents a content and actions related to the current screen.
 * It can be used for navigation, actions, titles, or branding
 */
export const AppBar = React.forwardRef(({
    anchorFrom = 'left',
    children,
    className,
    color = 'dark',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-AppBar brew-AppBar--${color} brew-AppBar--${anchorFrom} ${className}`,
    };


    return (
        <MuiAppBar
            classes={classes}
            ref={ref}
            {...otherProps}
        >
            <MuiToolbar className="brew-AppBar__content">
                {children}
            </MuiToolbar>
        </MuiAppBar>
    );


});


AppBar.displayName = 'AppBar';


export default AppBar;
