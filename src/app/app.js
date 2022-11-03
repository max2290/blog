

const auth = import('./features/authentification');

auth.then(m => {
consol.log(m);
m.login();

});