import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { sendMessageToGroq } from "../services/groqAPI"


// Async thunk API call
export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { messages } = getState().chat;
            
            // Filter out the initial greeting message (it's just for UI)
            const conversationMessages = messages.filter(msg => 
                !(msg.role === "assistant" && msg.text === "Hello, How can I help you today?")
            );

            // Format messages for Groq API
            const formattedMessages = [
                {
                    role: "system",
                    content: "You are a helpful assistant.",
                },
                ...conversationMessages.map((msg) => ({
                    role: msg.role === "ai" ? "assistant" : msg.role,
                    content: msg.text
                }))
            ];

            const response = await sendMessageToGroq(formattedMessages);
            return response;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to reach Groq AI");
        }
    }
)

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [{
            role: "assistant",
            text: "Hello, How can I help you today?",
        }],
        loading: false,
        error: null,
    },
    reducers: {
        addUserMessage: (state,action) => {
            state.messages.push({role: 'user', text:action.payload})
        },
        clearChat: (state) => {
            state.messages = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.messages.push({
                    role: "assistant",
                    text: action.payload,
                })
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { addUserMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;