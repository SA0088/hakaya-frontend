import sendRequest  from '/src/utilities/sendRequest.js';
const url = "/experience/"

export async function index() {
    return sendRequest(url)
}