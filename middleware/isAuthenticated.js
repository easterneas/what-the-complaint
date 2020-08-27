const isAuthenticated = (req, res, next) => {
    console.log(req.session);
}

module.exports = isAuthenticated