import { HTMLProps, ReactNode } from 'react';


export interface Props extends Omit<HTMLProps<HTMLTableCellElement>, 'label'> {


    /**
     * The custom HTML element to use for the TableCell
     * 
     * @default td
     */
    as?: 'td' | 'th',


    /**
     * The contents of the TableCell
     */
    children?: ReactNode,


    /**
     * The className for the TableCell
     */
    className?: string,


    /**
     * The label to show in the TableCell
     */
    label?: ReactNode,


}
