import OpenAI from "openai"


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(`prompt ${body.prompt}`)
    const config = useRuntimeConfig()
    if (config.TEST === "true") {
        const url = await testGenerate(body.prompt)
        return { url: url }
    } else {
        const url = await openaiGenerate(body.prompt)
        return { url: url }
    }
})

const testGenerate = async (prompt: string): Promise<string> => {
    return "https://cdn2.thecatapi.com/images/1pa.jpg"
}

const openaiGenerate = async (prompt: string): Promise<string> => {
    const config = useRuntimeConfig()
    const openai = new OpenAI({
        apiKey: config.OPENAI_API_KEY,
    });
    const response = await openai.images.generate({ prompt: prompt, size: "256x256", n: 1 })
    console.log(response)
    return response.data[0].url!
}
