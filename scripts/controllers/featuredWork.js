'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:FeaturedworkCtrl
 * @description
 * # FeaturedworkCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('FeaturedWorkCtrl', function () {
    this.projects = [
        {
        'title': 'shred.Insights',
        'url': 'https://sjbuysse.github.io/sessions-map/',
        'image': 'surfapp0',
        'alt': 'Homepage van de shred applicatie met filter drawer open',
        'description': 'Een single-page, responsive applicatie die een map toont met all je favoriete surfspots. De ingelogde gebruiker kan observaties toevoegen, sessie informatie en afbeeldingen uploaden (van de forecast, het strand, etc.) Op deze mannier kan de gebruiker na verloop van tijd beter inzicht krijgen in welke weerscondities goede surf leveren op zijn geliefde locaties. Drive less, shred more!',
        'technologies': ['JavaScript','Knockout.js','Firebase', 'jQuery', 'HTML5', 'CSS3', 
      'SASS', 'AJAX', 'Grunt']
      },
      {
        'title': 'Travelcrumbs',
        'url': 'http://www.travelcrumbs.net',
        'image': 'blog0',
        'alt': 'Image of sample homepage of a blog site',
        'description': 'Een responsive travelblog waarbij de ingelogde gebruiker verhaaltjes kan schrijven in markdown, en fotogallerijen toevoegen. De verhaaltjes worden automatisch gegoten in een mooie layout. De afbeeldingen worden opgeslagen op een CDN (Cloudinary) en responsief weergegeven.',
        'technologies': ['Ruby on Rails', 'Postgres', 'JavaScript', 'jQuery', 'HTML', 'CSS', 
  'Git', 'Markdown']
      },
      {
        'title': 'Todo-MVC',
        'url': 'https://sjbuysse.github.io/Todo-App/',
        'image': 'todo0',
        'alt': 'Image of sample homepage of a permaculture workshop site',
        'description': 'Een single-page, responsive applicatie om todos bij te houden, met filter. Het hoofddoel van deze applicatie was de ins en de outs van Backbone.js te leren.',
        'technologies': ['JavaScript', 'Backbone.js', 'jQuery', 'Underscore', 'HTML5', 'Bootstrap', 'CSS3']
      },
      {
        'title': 'LosFergos',
        'url': 'http://www.auspermaculture.com',
        'image': 'losfergos0',
        'alt': 'Image of sample homepage of a permaculture workshop site',
        'description': 'Een responsive wordpress website dat ik inneen gestoken heb voor mijn vriend Carl. Hij gebruikt de website als introductie en advertentie voor zijn earth building workshops.',
        'technologies': ['Wordpress', 'Heroku', 'HTML', 'CSS', 'Postgres', 'Git']
      },
      {
        'title': 'Frogger clone',
        'url': 'http://sjbuysse.github.io/frontend-nanodegree-arcade-game',
        'image': 'frogger0',
        'alt': 'Screenshot of the arcade game',
        'description': 'Kloon van het klassieke arcade spel, Frogger. Hier codeerde ik de speler, vijanden en andere entiteiten in JavaScript\'s object-oriented pseudo-classical style. Udacity heeft de spel engine en de graphics voorzien.',
        'technologies': ['JavaScript', 'HTML5 Canvas', 'jQuery', 'HTML5', 'CSS3']
      },
      {
        'title': 'Portfolio',
        'url': 'http://sjbuysse.github.io',
        'image': 'portfolio0',
        'alt': 'Screenshot of this website, inception!',
        'description': 'Klein websiteje om mezelf kort voor te stellen, maar vooral ook om eens iets te maken met AngularJS en Yeoman.',
        'technologies': ['JavaScript', 'AngularJS', 'Yeoman', 'HTML5', 'CSS3', 'Grunt']
      }

    ];
    this.openModal = function(project) {
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("myModal-img01");
        var captionText = document.getElementById("myModal-caption");
        captionText.innerHTML = project.alt;
        modalImg.src = 'images/landscape/'+project.image+'-large.jpg';
        modal.style.display = "block";
    };
  });
