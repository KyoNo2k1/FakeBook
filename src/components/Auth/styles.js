import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    iconFb: {
        width: "100px !important",
        height: "100px",
    },
    paper: {
        display: 'flex',
        width: "350px",
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        },
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontWeight: 'bold',
        height: '40px',
        alignItems: 'center'
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
    divider: {
        background: '#f50057',
    },
    switchMode: {
        padding: theme.spacing(1),
        background: '#42b72a',
        margin: 0,
        color: 'white'
    }
}));