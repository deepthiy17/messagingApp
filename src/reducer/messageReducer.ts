import { createSlice, PayloadAction } from 'redux-starter-kit';

export type Message = {
  text: string;
  sentAt: number;
};

export type MessageState = {
  messages: Array<Message>;
  isLoading: boolean;
  isUploading: boolean;
};

const initialState: MessageState = {
  messages: [],
  isLoading: false,
  isUploading: false,
};

const slice = createSlice({
  name: 'available-messages',
  initialState,
  reducers: {
    fetchMessages: (state: MessageState) => {
      state.isLoading = true;
    },
    onFetchMessgeSuccess: (state: MessageState, action: PayloadAction<Array<Message>>) => {
      state.messages = action.payload;
      state.isLoading = false;
    },
    uploadMessage: (state: MessageState, action: PayloadAction<string>) => {
      state.isUploading = true;
    },
    onUploadMessageSuccess: (state: MessageState, action: PayloadAction<Message>) => {
      state.isUploading = false;
      state.messages.push(action.payload);
    },
  },
});

export const { reducer, actions } = slice;
