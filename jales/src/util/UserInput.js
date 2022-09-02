export async function AskForUrl(msg) {
    return new Promise(resolve => setTimeout(() => resolve(prompt(msg))));
}
