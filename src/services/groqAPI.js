import axios from "axios";

export const groqAPI = axios.create({
    baseURL: "https://api.groq.com/openai/v1",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    }
})

export const sendMessageToGroq = async (messages) => {
    try {
        const response = await groqAPI.post("/chat/completions", {
            model: "llama-3.3-70b-versatile",
            messages: messages,
        });
        return response.data.choices[0].message.content;
    } catch (err) {
        console.error("Groq API Error:", err.response?.data || err.message);
        throw err;
    }
};