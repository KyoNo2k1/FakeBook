import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    circularProgress: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#92fff8'
    },
    circularProgressIcon: {
        width: '80px !important',
        height: '80px !important',
    },
}));