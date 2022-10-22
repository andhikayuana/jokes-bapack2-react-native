const BASE_URL = "https://jokes-bapack2-api.yuana.id"

export async function getRandom() {
    const response = await fetch(`${BASE_URL}/v1/text/random`)
    const photos = await response.json()
    return photos
}