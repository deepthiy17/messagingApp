import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from 'redux-starter-kit';
import { actions, Message } from '../reducer/messageReducer';
import { fetchMessageService, uploadMessageService } from '../services/messageService';

function* fetchMessages() {
  const resp: Array<Message> = yield fetchMessageService();
  yield put(actions.onFetchMessgeSuccess(resp));
}

function* uploadMessage(action: PayloadAction<string>) {
  const resp: Message = yield uploadMessageService(action.payload);
  yield put(actions.onUploadMessageSuccess(resp));
}

export default function* watchMessages() {
  yield takeEvery(actions.fetchMessages, fetchMessages);
  yield takeEvery(actions.uploadMessage, uploadMessage);
}
