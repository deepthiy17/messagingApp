import { spawn } from '@redux-saga/core/effects';
import messageSaga from './messageSaga';

export default function* root() {
    yield spawn(messageSaga);
}
