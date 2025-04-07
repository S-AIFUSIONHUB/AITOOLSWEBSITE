async function simulateTool(toolName) {
    const output = document.getElementById("outputBox");
    output.innerText = `🤖 Processing "${toolName}"...`;

    const OPENAI_API_KEY = "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";
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
