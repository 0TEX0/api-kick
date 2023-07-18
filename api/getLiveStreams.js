const buildApiUrl = require('../util/apiUtils');

async function getLiveStreams(username) {
    const apiUrl = buildApiUrl(`https://kick.com/api/v2/channels/${username}/livestream`);

    return apiUrl;
}

module.exports = getLiveStreams;
