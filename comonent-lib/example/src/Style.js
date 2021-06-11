import { makeStyles } from '@material-ui/core'

export const useStyle = () => makeStyles(
    {
        container: {
            padding: 50,
            margin: 60,
        },
    },
    {
        name: 'DTPButton'
    }
);