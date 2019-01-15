
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8818,
    URL: process.env.BASE_URL || 'http://localhost:8818',
    MONGODB_ATLAS_PW: process.env.MONGODB_ATLAS_PW || 'admin',
};