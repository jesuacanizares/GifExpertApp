export const getGifs = async (category) => {
    const limit = 10;
    const APIKEY = "E6XAW9f7YXJDruLPOqpxQQNcE0W9nNL2";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${category}&limit=${limit}`
    const rs = await fetch(URL)
    const {data} = await rs.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )

    console.log(rs)

    return gifs

}