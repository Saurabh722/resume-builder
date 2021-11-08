const ASSETS_LINK = "https://github.com/Saurabh722/media.github.io/raw/master/assets/";

function getUrl (srcName) {
    return `${ASSETS_LINK}${srcName}`;
}

export default {
    getUrl
};