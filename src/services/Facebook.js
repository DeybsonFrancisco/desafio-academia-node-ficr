const Axios = require("axios");

const facebookUserInfo = async () => {
    try {
        const userInfo = await Axios.get(
            `https://graph.facebook.com/v5.0/me?access_token=${process.env.USER_TOKEN_FACEBOOK}&debug=all&fields=id%2Cname%2Cbirthday%2Ceducation%2Cemail%2Clocation&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors`
        );
        console.log(userInfo.data);
        return userInfo.data;
    } catch (err) {
        return err;
    }
};
module.exports = facebookUserInfo;
