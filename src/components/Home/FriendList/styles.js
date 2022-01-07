import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "white",
        border: '2px solid #14fff0',
        borderRadius: '10px'
    },
    friendListHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: "white",
        padding: '0 10px',
        borderBottom: '3px solid #f50057'
    },
    headerIcon: {
        padding: '3px'
    },
    friendListInfo: {
        height: '640px',
        overflowX: 'auto',
        display: 'block',
    },
    listFriend: {
        display: 'flex',
        backgroundColor: "#e0e0e0",
    },
    divider: {
        background: '#f50057',
    },
}));