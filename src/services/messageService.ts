import { delay } from '../utils';
import mockData from '../constants/message_mock.json';
import { Message, actions } from '../reducer/messageReducer';

export const fetchMessageService = async () => {
  await delay(1200);
  return mockData;
};

export const uploadMessageService = async (text: string) => {
  await delay(1200);
  const message: Message = {
    text,
    sentAt: new Date().getMilliseconds(),
  };
  return message;
};
