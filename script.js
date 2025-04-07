// script.js
// Assumes config.js is loaded before this script
async function getAIResponse(promptText) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`  // uses key from config.js
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: promptText }],
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
