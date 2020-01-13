import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<CardHeader />` component is intended to be used inside the `<Card />` component to create a header.
 */
function CardHeader({
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-CardHeader',
        className,
    );


    return (
        <div className={classes} {...otherProps} />
    );


}


export default CardHeader;
