import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formPost: {
        backgroundColor: '#e0e0e0',
        borderRadius: '8px',
        padding: '5px 10px',
        display: 'block',
        marginBottom: '15px'
    },
    divider: {
        background: '#f50057',
    },
    formPostTop: {
        display: 'flex',
        paddingTop: '5px'
    },
    formPostAvatart: {
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.7
        },
    },
    formPostMessage: {
        margin: '0 10px',
        borderRadius: '20px',
        textDecoration: 'none',
        backgroundColor: 'white',
        textTransform: 'none',
        justifyContent: 'flex-start',
        display: 'flex',
    },
}));