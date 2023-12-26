export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(`prompt ${body.prompt}`)
    return { url: "https://cdn2.thecatapi.com/images/1pa.jpg" }
})
