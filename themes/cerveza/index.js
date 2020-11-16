import { createMuiTheme } from '@material-ui/core/styles';
import { merge as _merge } from 'lodash';
import { color } from './variables';
import Typography from './components/Typography';
import Alert from './components/Alert';
import AlertTitle from './components/AlertTitle';
import Badge from './components/Badge';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import CircularProgress from './components/CircularProgress';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import TextField from './components/TextField';
import FormHelperText from './components/FormHelperText';
import FormControlLabel from './components/FormControlLabel';
import InputLabel from './components/InputLabel';
import OutlinedInput from './components/OutlinedInput';
import Select from './components/Select';
import Switch from './components/Switch';
import Dialog from './components/Dialog';
import DialogContent from './components/DialogContent';
import DialogContentText from './components/DialogContentText';
import DialogActions from './components/DialogActions';
var Cerveza = createMuiTheme(_merge({
    palette: {
        primary: {
            light: color.blue.light,
            main: color.brand.primary,
            dark: color.blue.dark
        },
        secondary: {
            light: color.orange.light,
            main: color.brand.secondary,
            dark: color.orange.dark
        },
        success: {
            main: color.accent.success
        },
        warning: {
            main: color.accent.warning
        },
        info: {
            main: color.accent.info
        },
        error: {
            main: color.accent.error
        },
        text: {
            primary: color.gray.dark
        }
    }
}, Typography, Alert, AlertTitle, Badge, Button, ButtonGroup, CircularProgress, Checkbox, Radio, Select, Switch, TextField, FormHelperText, FormControlLabel, InputLabel, OutlinedInput, Dialog, DialogContent, DialogContentText, DialogActions));
export default Cerveza;
