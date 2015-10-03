
Router.route('/', function () {
  this.render("home");
}, {name: "Home"});
Router.route('/CampusMap', function () {
  this.render("map");
}, {name: "CampusMap"});

Router.route('/find', function () {
  this.render("find");
}, {name: "Find"});

Router.route('/CodeOfConduct', function () {
  this.render("coc");
}, {name: "CodeOfConduct"});

Router.route('/StudentServiceAndFacilities', function () {
  this.render("ssf");
}, {name: "StudentServiceAndFacilities"});

Router.route('/Courses', function () {
  this.render("course");
}, {name: "CurricularOfferings"});

Router.route('/About', function () {
  this.render("about");
}, {name: "AboutTheUniversity"});