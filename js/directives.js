'use strict';

angular.module('tutorial.directives', []).

directive('finger', function() {
	return {
		restrict: 'E',
		scope: {
			developer: '='
		},
		link: function(scope) {
			scope.$watch('developer', function() {
				scope.class = loweredAndDashed(scope.developer);
			});
		},
		template: '<div class="{{class}} finger-image"></div>'
	}
});

function loweredAndDashed(str) {
	if(!str) return null;
	if (str.length === 0) return str;
	var newString = str.toLowerCase();
	return newString.split(' ').join('-');
};