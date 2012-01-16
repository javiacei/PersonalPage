var c2;

Raphael(function () {
  var paper = Raphael("container");
  var c1 = paper.circle(150, 150, 10).attr({fill: "#0A4"}).data('node', "data");
  c2 = paper.circle(150, 150, 5).attr({fill: "#FFF"}).data('node', "data");

  var c3 = paper.circle(350, 150, 10).attr({fill: "#0A4"}).data('node', "data");
  c4 = paper.circle(350, 150, 5).attr({fill: "#FFF"}).data('node', "data");
  //var c = paper.rect(104, 180, 55, 5).attr({fill: "#0A4"}).rotate(-60);
  var master = paper.rect(110, 147.5, 400, 5).attr({fill: "#0A4"});
  c1.toFront();
  c2.toFront();
  c3.toFront();
  c4.toFront();

});

//$(function(){
//    // Commit
//    var Commit = Backbone.Model.extend({
//    });
//
//    // CommitCollection
//    var CommitCollection = Backbone.Collection.extend({
//        model: Commit
//    });
//
//    // Branch
//    var Branch = Backbone.Model.extend({
//        defaults: function() {
//            name : 'Untitled'
//        },
//
//        initialize: function() {
//            this.commits = new CommitCollection;
//        }
//    });
//
//    var c1 = new Commit({name: 'commit1', createdAt: new Date()});
//    var c2 = new Commit({name: 'commit2', createdAt: new Date()});
//
//    var b1 = new Branch({name: 'master'});
//    b1.commits.add(c1).add(c2);
//    console.log(b1);
//});
