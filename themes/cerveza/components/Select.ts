import { color, size } from '../variables';


const Select = {


    props: {

        MuiSelect: {
            MenuProps: {

            },
        },

    },


    overrides: {

        MuiSelect: {

            root: {

                '&$select': {
                    transition: 'all 0.3s',
                },

                '&$select:focus': {
                    background: color.brand.primary,
                    color: '#fff',
                    borderRadius: '4px',
                },

                '&:focus ~ svg': {
                    color: '#fff',
                },

                '& label': {
                    transform: 'translate(18px, 18px) scale(1)',
                },

            },

            iconOpen: {
                color: '#fff',
            },

        },

    },


    BkTextField: {
        menu: {
            padding: size.xsmall,
            backgroundColor: '#fff',
            border: `1px solid ${color.brand.primary}`,

            '& ul': {
                padding: 0,
            },

        },
        menuItem: {
            padding: size.small,
            transition: 'all 0.3s',
        },
        activeMenuItem: {
            backgroundColor: `${color.brand.primary} !important`,
            color: '#fff',
        },
    },


};


export default Select;
