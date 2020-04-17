import React from 'react';
import { StyledComponent } from '../types';

export interface Props extends StyledComponent {

    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Object,

    /**
     * The component used for the root node.  Either a string to use a DOM element or a component.
     */
    component?: React.ElementType,

    /**
     * If true, the tab will be disabled.
     */
    disabled?: boolean,

    /**
     * The icon element.
     */
    icon?: React.ReactElement,

    /**
     * The label element.
     */
    label?: React.ReactNode,

    /**
     * You can provide your own value.  Otherwise, we fall back to the child position index.
     */
    value?: any,

    /**
     * The tab link, if you'd like to link somewhere instead of just showing or hiding elements
     */
    href?: string,
};
