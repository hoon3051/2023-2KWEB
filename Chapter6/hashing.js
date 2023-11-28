const util = require('util');
const crypto = require('crypto');

const pbkdf2 = util.promisify(crypto.pbkdf2);

const encrypt = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const salt = await randomBytes(32);
    const iter = Math.floor(Math.random() * 20000) + 200000;

    const digest = await pbkdf2(text, salt, iter, KEY_LEN, ALGO); // PW, salt, 반복횟수, byte단위 key길이, 알고리즘
    return `${ALGO}:${salt.toString(
        'base64',
    )}:${iter}:${KEY_LEN}:${digest.toString('base64')}`;
};

(async () => {
    await encrypt('samplepasswordsamplepasswordsamplepasswordsamplepasswordsample');
    await encrypt('samplepasswordsamplepastwordsamplepasswordsamplepasswordsample');
})();
    
