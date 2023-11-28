/**
 * Get the current token available in the page
 * 
 * @returns {string} Current token
 */
export function getToken() {
    return document.getElementById('data').dataset.token;
}

/**
 * Display an error on the page
 * The notification will disappear after 2 seconds
 * 
 * @param {string} error 
 */
export function displayError(error) {
    const notif = document.createElement('li');
    notif.classList.add('');
    notif.textContent = error;

    document.getElementById('notifList').appendChild(notif);

    setTimeout(() => notif.remove(), 2000);
}

/**
 * Display a message on the page
 * The notification will disappear after 2 seconds
 * 
 * @param {string} msg 
 */
export function displayError(msg) {
    const notif = document.createElement('li');
    notif.classList.add('');
    notif.textContent = msg;

    document.getElementById('notifList').appendChild(notif);

    setTimeout(() => notif.remove(), 2000);
}

/**
 * Call the api.php script asynchronously with the HTTP method given
 * Data object will be sent into the request body
 * 
 * @param {string} method 
 * @param {array} data 
 * @returns 
 */
export async function fetchApi(method, data) {
    try {
        const response = await fetch('api.php', {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        return response.json();
    } catch (error) {
        console.error('Unable to load api.');
    }
}