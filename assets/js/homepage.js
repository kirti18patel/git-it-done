var getUserRepos = function() {
   var data= fetch("https://api.github.com/users/octocat/repos");
   console.log(data);
};
  getUserRepos();