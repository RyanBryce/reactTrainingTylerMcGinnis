var axios = require('axios');

function getProfile (username){
  return axios.get('https://api.github.com/users/' + username + params))
    .then(function (user) {
      return user.data;
    });
}
function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' +  params + '&per_page=100')
}

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then((res) => {
        return res.data.items;
      })
  }
};
