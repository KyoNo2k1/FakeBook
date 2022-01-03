import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        backgroundColor: '#e0e0e0'
    },
    avatar: {
        backgroundColor: 'blue',
        border: '1px solid'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    divider: {
        // Theme Color, or use css color in quote
        background: '#f50057',
    },
    iconPost: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});