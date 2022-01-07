import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    circularProgress: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
        backgroundColor: 'transparent'
    },
    circularProgressIcon: {
        width: '80px !important',
        height: '80px !important',
    },
}));