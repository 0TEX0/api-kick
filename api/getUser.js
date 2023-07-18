const buildApiUrl = require('../util/apiUtils');

async function getUser(username) {
    const apiUrl = buildApiUrl(`https://kick.com/api/v1/channels/${username}`);

    return apiUrl;
}

module.exports = getUser;
