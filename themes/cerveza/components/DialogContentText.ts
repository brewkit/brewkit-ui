import { color } from '../variables';

const DialogContentText = {
    overrides: {
        MuiDialogContentText : {
            root: {
                color: color.blueGray.light,
                textAlign: "center",
                marginBottom: '1rem',
                '&:last-child': {
                    marginBottom : 0,
                },
            },
        },
    },
};

export default DialogContentText;
