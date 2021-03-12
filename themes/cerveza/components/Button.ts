import Color from 'color';
import { color, size } from '../variables';


const Button = {

    props: {

        MuiButton: {
            color: 'primary',
            variant: 'contained',
            disableElevation: true,
        },

    },

    overrides: {

        MuiButton: {

            /**
             * general styles
             */
            root: {
                fontSize: size.normal,
                padding: `${size.normal} ${size.large}`,
                minWidth: '150px',
                lineHeight: 0,

                '&$contained': {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'transparent',
                },

            },

            /**
             * color variant styles
             */
            containedPrimary: {
                color: color.gray.lightest,
                borderColor: color.brand.primary,
                '&:disabled': {
                    background: 'transparent',
                    opacity: 0.5,
                    color: color.brand.primary,
                    borderColor: color.brand.primary,
                },
                '&:hover': {
                    backgroundColor: Color(color.brand.primary).darken(0.1).hex(),
                },
            },

            containedSecondary: {
                color: color.gray.lightest,
                borderColor: color.brand.secondary,
                '&:disabled': {
                    background: 'transparent',
                    opacity: 0.5,
                    color: color.brand.secondary,
                    borderColor: color.brand.secondary,
                },
                '&:hover': {
                    backgroundColor: Color(color.brand.secondary).darken(0.1).hex(),
                },
            },

            sizeSmall: {
                fontSize: size.small,
                padding: `${size.xsmall} ${size.small}`,
                minWidth: 0,
            },

        },

    },

};


export default Button;
