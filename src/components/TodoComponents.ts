const tasks = async () =>
{
    return await fetch(import.meta.env.VITE_API_URL).then(res => res.json())
}