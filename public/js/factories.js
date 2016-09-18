angular.module('myApp')
  .factory('CharacterVersionFactory', [
    'mainCharacter',
    'APP_VERSION',
    CharacterVersionFactory
]);

function CharacterVersionFactory (mainCharacter, APP_VERSION) {
  return `${mainCharacter} ${APP_VERSION}`;
};