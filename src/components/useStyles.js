import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid #000',
            height: '100vh',
            backgroundColor: '#add8e6'
        },
        cardStyles: {
            height: '40vh',
            width: '30vh',
            backgroundColor: 'red',
            padding: 20
        }
    }
})

export default useStyles;