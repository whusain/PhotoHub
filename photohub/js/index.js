var login = sessionStorage.getItem('login');
if(login === null || !login) {
    window.location = "/login";
}
$('#logout').on('click', function(e) {
    e.preventDefault();
    sessionStorage.removeItem('login');
    window.location = '/login';
});