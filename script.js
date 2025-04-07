async function simulateTool(toolName) {
    const output = document.getElementById("outputBox");
    output.innerText = `🤖 Processing "${toolName}"...`;

    // Use the key from config.js
console.log("Using API Key:", OPENAI_API_KEY);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful AI assistant." },
                { role: "user", content: `Use the tool: ${toolName}` }
            ]
        })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No response received.";
    output.innerText = `💬 ${reply}`;
}
