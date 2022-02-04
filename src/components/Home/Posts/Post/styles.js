import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        marginBottom: 5,
        objectFit: "contain"
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
        backgroundColor: '#e0e0e0',
        overflow: 'hidden'
    },
    cardHeaderName: {
        fontSize: '1rem',
        fontWeight: 600,
        '&:hover': {
            textDecoration: "underline",
        },
    },
    cardContent: {
        paddingTop: '0px'
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
        background: '#f50057',
    },
    iconPost: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            color: '#00ada6',
            textDecoration: 'none',
            cursor: 'pointer'
        },
    },
    animatedItem: {
        animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`
    },
    animatedItemExiting: {
        animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: "translateY(-100%)"
    },
    "@keyframes myEffect": {
        "0%": {
            opacity: 0,
            transform: "translateY(-100%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
    "@keyframes myEffectExit": {
        "0%": {
            opacity: 1,
            transform: "translateY(0)"
        },
        "100%": {
            opacity: 0,
            transform: "translateY(-100%)"
        }
    },
    commentSpace: {
        borderRadius: "0 0 15px 15px",
        overflow: "hidden"
    }
}));