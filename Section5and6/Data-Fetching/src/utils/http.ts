export async function get(url: string) {
    const response = await fetch (url); // use await to handle the promise

    if (!response.ok){
        throw new Error("Something went wrong fetching url");
    }

    const data = await response.json() as unknown;
    return data;
}