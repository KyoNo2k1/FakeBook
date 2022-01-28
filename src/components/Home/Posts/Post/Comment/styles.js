import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    divider: {
        background: '#f50057',
    },
    commentHeader: {
        backgroundColor: "#efe4ff",
        display: "flex",
        padding: "3px 10px"
    },
    avatar: {
        backgroundColor: 'blue',
        border: '1px solid'
    },
    commentBody: {
        display: "flex",
        backgroundColor: "#fddddd",
        padding: "3px 10px",
    },
    commentBodyImg: {

    },
    commentBodyInfo: {
        display: "block",
        backgroundColor: "#e0e0e0",
        padding: "5px 10px 7px",
        marginLeft: "5px",
        borderRadius: "10px",
        maxWidth: "90%"
    },
    commentBodyInfoName: {
        marginBottom: "10px",
        fontSize: "1rem",
    },
    commentBodyInfoMessage: {
        paddingTop: "3px",
        wordWrap: "break-word",
        wordBreak: "break-word"
    },
    margin: {
        margin: theme.spacing(1),
    },
    commentHeaderInput:{
        position: 'relative',
    },
    emojiCmt: {
        display: 'inline-block',
        margin: 'auto 2px',
        position: 'relative'
    },
    emojiCmtIcon: {
        position: 'absolute',
        top: "-5px",
        zIndex: "10",
    }
}))