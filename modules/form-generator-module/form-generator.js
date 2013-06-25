'use strict';

var formGenerator = angular.module('formGeneratorModule', []);

formGenerator.factory('FormFactory', function() {
	var formFactory = {};

	formFactory.getForm = function(fields) {
		var html = '';

		if (!fields || !fields.length) {
			return '';
		}

		for (var i = 0; i < fields.length; i++) {
			var field = fields[i];
			var ngModelStr = 'formFields[' + i + '].value';

			if (field.type === 'text' || field.type === 'email' || field.type === 'telephone' || field.type === 'url') {
				html += getInputHtml(field, ngModelStr);
			} else if (field.type === 'textarea') {
				html += getTextareaHtml(field, ngModelStr);
			}
		}

		return html;
	};

	function getInputHtml(inputObj, ngModelStr) {
		if (!inputObj) return '';
		var inputHtml = '';
		inputHtml += getLabelHtml(inputObj.name);
		inputHtml += '<input type="' + inputObj.type + '" ' +
					        'placeholder="' + inputObj.placeholder + '" ' +
					        'ng-required="' + inputObj.required + '" ' +
					        'ng-model="' + ngModelStr + '" ' +
					  '/>';
		return inputHtml;
	}

	function getTextareaHtml(textareaObj, ngModelStr) {
		if (!textareaObj) return '';
		var textareaHtml = '';
		textareaHtml += getLabelHtml(textareaObj.name);
		textareaHtml += '<textarea placeholder="' + textareaObj.placeholder + '" ' +
							      'ng-required="' + textareaObj.required + '" ' +
							      'ng-model="' + ngModelStr + '" ' +
						'></textarea>';
		return textareaHtml;
	}

	function getLabelHtml(labelText) {
		if (!labelText) return '';
		var labelHtml = '<label>' + labelText + '</label>';
		return labelHtml;
	}

	return formFactory;
});

formGenerator.directive('formGenerator', function($compile, FormFactory) {
	var linker = function(scope, elm, attrs) {
		var formHtml = FormFactory.getForm(scope.formFields);
		elm.html(formHtml);
		$compile(elm.contents())(scope);
	};

	return {
		restrict: 'E',
		replace: true,
		scope: {
			formFields: '='
		},
		link: linker
	}
});