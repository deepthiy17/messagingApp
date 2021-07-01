import { CircularProgress, Container, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../../components/Text';
import { actions, Message } from '../../reducer/messageReducer';
import { IState } from '../../store';

const useStyles = makeStyles({
    container: {
        padding: 0,
        height: 'calc( 100% - 64px)',
        background: 'white',
    },
    progressContainer: {
        height: 'calc( 100% - 50px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageContainer: {
        height: 'calc( 100% - 50px)',
        padding: 10,
        overflowY: 'scroll'
    },
    inputContaner: {
        display: 'flex',
        margin: '0 20px',
    },
    inputTextfield: {
        flexGrow: 1,
    },
    sendButton: {
        height: 32,
        float: 'right',
    },
});

const Home: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { messages, isLoading, isUploading } = useSelector((state: IState) => state.messagesStore);

    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        dispatch(actions.fetchMessages());
    }, [dispatch]);

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleInputKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') handleMessageSend();
    }

    const handleMessageSend = () => {
        dispatch(actions.uploadMessage(message));
        setMessage('');
    };

    const renderLoader = () => (
        <Container className={classes.progressContainer}>
            <CircularProgress />
        </Container>
    );

    const renderMessage = (message: Message) => (<Text key={message.sentAt} message={message} />);

    const renderMessages = () => (
        <Container className={classes.messageContainer}>
            {messages.map(renderMessage)}
        </Container>
    );

    const renderTextBox = () => {
        return (<div className={classes.inputContaner}>
            <TextField
                placeholder='Type a message'
                value={message}
                onChange={handleMessageChange}
                onKeyDown={handleInputKeyDown}
                className={classes.inputTextfield}
            />
            <IconButton
                color='primary'
                size='medium'
                onClick={handleMessageSend}
                className={classes.sendButton}
                disabled={!message}
            >
                {isUploading ? <CircularProgress size={16} /> : <SendIcon />}
            </IconButton>
        </div>);
    }

    return (
        <Container className={classes.container}>
            {isLoading ? renderLoader() : renderMessages()}
            {renderTextBox()}
        </Container>
    );
}

export default Home;