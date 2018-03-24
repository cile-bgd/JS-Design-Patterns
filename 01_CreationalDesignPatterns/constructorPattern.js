// the NEW keyword
// creates a brand new object
// links to an object prototype
// binds "this" to the new object scope
// implicitly returns "this"

var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('Saving Task:' + this.name);
}

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();