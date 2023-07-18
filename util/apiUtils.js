const { getRawResponse } = require('./httpConnection');

async function buildApiUrl(endpoint) {
    const apiUrl = endpoint;

    try {
        const userData = await getRawResponse(apiUrl, '#user-data', {});

        return userData;
    } catch (error) {
        console.error(`Erreur lors de la récupération des données de l'API: ${error}`);
        throw error;
    }
}

module.exports = buildApiUrl;
