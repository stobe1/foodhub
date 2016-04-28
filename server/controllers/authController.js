exports.login = function(request, response) {
    response.send('Auth#login');
}

exports.logout = function(request, response) {
    response.send('Auth#logout');
}
