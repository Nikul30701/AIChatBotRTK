# 🤖 AI ChatBot with Redux Toolkit

A modern, responsive AI-powered chatbot application built with React, Redux Toolkit, and the Groq API. This project demonstrates state management with Redux Toolkit and seamless integration with AI language models.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?logo=tailwindcss&logoColor=white)

## ✨ Features

- 💬 **Real-time AI Chat**: Interact with AI models powered by Groq API
- 🎨 **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- 🔄 **State Management**: Robust state handling using Redux Toolkit
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎯 **Clean Architecture**: Organized code structure with features, services, and components
- 🧹 **Clear Chat**: Easy-to-use chat clearing functionality
- ⚡ **Async Operations**: Efficient handling of API calls with Redux Toolkit's `createAsyncThunk`

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **State Management**: Redux Toolkit 2.11.2
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **HTTP Client**: Axios 1.13.2
- **Icons**: Lucide React 0.562.0
- **AI API**: Groq API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- A Groq API key ([Get one here](https://console.groq.com))

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd AIChatBotRTK
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your Groq API key:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```text
AIChatBotRTK/
├── src/
│   ├── components/        # React components
│   │   └── ChatWindow.jsx # Main chat interface component
│   ├── features/          # Redux slices
│   │   └── chatSlice.js   # Chat state management
│   ├── services/          # API services
│   │   └── groqAPI.js     # Groq API integration
│   ├── store/             # Redux store configuration
│   │   └── store.js       # Store setup
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎯 Usage

1. **Start a conversation**: Type your message in the input field at the bottom
2. **Send message**: Click the send button or press Enter
3. **View responses**: AI responses will appear in the chat window
4. **Clear chat**: Use the clear button to start a fresh conversation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧩 Key Components

### ChatWindow

The main chat interface component that displays messages and handles user input.

### chatSlice

Redux slice managing chat state including:

- Message history
- Loading states
- Error handling
- Async thunk for sending messages

### groqAPI

Service layer for interacting with the Groq API to fetch AI responses.

## 🌟 Features in Detail

### State Management

The application uses Redux Toolkit for predictable state management:

- `addUserMessage`: Adds user messages to the chat
- `sendMessage`: Async thunk for API calls
- `clearChat`: Resets the conversation

### API Integration

Seamless integration with Groq API for AI-powered responses with proper error handling and loading states.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Groq](https://groq.com/) for the AI API
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Support

If you have any questions or run into issues, please open an issue in the repository.

---

Built with ❤️ using React and Redux Toolkit
