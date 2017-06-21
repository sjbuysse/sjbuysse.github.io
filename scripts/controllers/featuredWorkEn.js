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
        'title': 'Travelcrumbs',
        'url': 'http://www.travelcrumbs.net',
        'image': 'blog0',
        'alt': 'Image of sample homepage of a blog site',
        'description': 'A responsive travelblog where the user can easily add a story using markdown language, and a gallery of pictures. All of the stories will be saved to the database and formatted in a beautiful layout. The actual images in the galleries are stored on a CDN (cloudinary) and displayed responsively.',
        'technologies': ['Ruby on Rails', 'Postgres', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Git']
      },
      {
        'title': 'LosFergos',
        'url': 'http://www.auspermaculture.com',
        'image': 'losfergos0',
        'alt': 'Image of sample homepage of a permaculture workshop site',
        'description': 'A responsive wordpress website I put together for my host and friend Carl. He uses this website to introduce and advertise his earth building workshops.',
        'technologies': ['Wordpress', 'Heroku', 'HTML', 'CSS', 'Postgres', 'Git']
      }
    ];
  });
