var repo = function () {

    return {
        get: function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from DB'
            }
        }
    }
}