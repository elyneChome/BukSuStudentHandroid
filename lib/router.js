
Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function() {
  this.route('index', {path: '/'});
  this.route('home');
  this.route('map');
  this.route('find');
  this.route('coc');
  this.route('ssf');
  this.route('course');
  this.route('about');
});

