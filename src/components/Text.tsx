import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Message } from '../reducer/messageReducer';

interface IProps {
    message: Message
}

const useStyles = makeStyles({
    text: {
        padding: 6,
    },
});

const Text: React.FC<IProps> = (props: IProps) => {
    const { message: { text } } = props;
    const classes = useStyles();
    return (
        <Typography className={classes.text}>{text}</Typography>
    )
};

export default Text;