import { color, size } from '../variables';
var Tooltip = {
    props: {
        MuiTooltip: {
            arrow: true
        }
    },
    overrides: {
        MuiTooltip: {
            tooltip: {
                padding: size.small,
                fontSize: size.small,
                backgroundColor: color.accent.info,
                color: color.blueGray.lightest,
                minWidth: '150px',
                maxWidth: '240px',
                borderRadius: size.xxsmall,
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
            },
            arrow: {
                color: color.accent.info
            }
        }
    }
};
export default Tooltip;
