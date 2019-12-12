import { ReactNode } from 'react';
import { Props as InputProps } from '../../../Input/types';

export interface Props {
    error?: boolean,
    helperText?: string,
    label?: ReactNode,
    className?: string,
    children?: ReactNode,
};
