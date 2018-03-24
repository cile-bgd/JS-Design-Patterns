// simplifies object creation
// creating different objects based on need
// repository creation
// gulp

var repoFactory = function () {
    var repos = this;
    var reposList = [
        {name: 'task', source: './taskRepository'},
        {name: 'user', source: './userRepository'},
        {name: 'project', source: './projectRepository'}];

    reposList.forEach(function(repo) {
        repos[repo.name] = require(repo.source)()
    });
};

module.exports = new repoFactory;