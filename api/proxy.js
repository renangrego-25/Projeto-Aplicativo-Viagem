export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: "Pergunta não informada" });
    }

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=" + GEMINI_API_KEY,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    system_instruction: {
                        parts: [
                            { text: "Você é Travs, um assistente de IA para viagens e dúvidas relacionadas a este assunto, seja simpático e objetivo. Apresente as informações de maneira direta e prática. Qualquer dúvida fora deste padrão retorne que você não é preparado para este assunto e solicite outra pergunta. Usar emojis, porém evite colocar elementos que sejam feios visualmento, como asteristcos. Siga rigorosamente padrões da Lingua Portuguesa, acentos e regras gramaticais. Respostas devem ser diretas, mas sem parecer rude, ofere ajuda ao final de cada resposta." }
                        ]
                    },
                    contents: [
                        {
                            parts: [
                                { text: question }
                            ]
                        }
                    ],
                    generationConfig: {
                        thinkingConfig: {
                            thinkingBudget: 1
                        }
                    }
                })
            }
        );

        const data = await response.json();
            console.log("Resposta completa do Gemini:", JSON.stringify(data, null, 2));
            res.status(200).json(data);

    } catch (error) {
        console.error("Erro no proxy:", error);
        res.status(500).json({ error: "Erro ao conectar com a IA" });
    }
};

