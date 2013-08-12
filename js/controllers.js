function indexCtrl($scope) {

}

function homeCtrl($scope) {

}

function listCtrl($scope) {
	$scope.developers = [
	{
		name: 'Ian Shoemaker',
		tags: ['Web', 'Node', 'Java', 'Angular', 'Asian'],
		languages: []
	},
	{
		name: 'Derek Hall',
		tags: ['Web', 'Node', 'Java', 'Angular', 'Badass'],
		languages: ['java']
	},
	{
		name: 'Ken Frazier',
		tags: ['iOS', 'Android', 'Meathead'],
		languages: []
	},
	{
		name: 'Donald Renner',
		tags: ['Web', 'Java', 'Kiosk', 'Android', 'Blackberry'],
		languages: []
	},
	{
		name: 'Joe Sharp',
		tags: ['Web', 'Javascript', 'Java', ''],
		languages: []
	},
	{
		name: 'Ryan Chandler',
		tags: ['Java', 'Web', 'Kiosk', 'Hadoop'],
		languages: []
	},
	{
		name: 'Ryan Bohn',
		tags: ['Javascript', 'Javascript Ninja', 'Web', 'Node'],
		languages: []
	},
	{
		name: 'John Mann',
		tags: ['Web', 'Javascript', 'Doesn\'t like beandipping'],
		languages: []
	},
	{
		name: 'Bill Kratzer',
		tags: ['Dancer', 'Bacon', 'Web', 'Java', 'Javascript', 'Kiosk'],
		languages: []
	},
	{
		name: 'Clint Martin',
		tags: ['Noobie', 'Javascript', 'Node', 'Fresh Outta College'],
		languages: []
	},
	{
		name: 'Dave Sailer',
		tags: ['iOS', 'Android'],
		languages: []
	},
	{
		name: 'Jonathan Lantzy',
		tags: ['Systems Dude', 'Windows', 'OS Master'],
		languages: []
	},
	{
		name: 'Derek Ivey',
		tags: ['Ginger', 'Systems Dude', 'Networking'],
		languages: []
	}];

	$scope.currentDeveloper = $scope.developers[0];

	$scope.searchSort = '';

	$scope.selectDeveloper = function(developer){
		$scope.currentDeveloper = developer;
	}

	$scope.mode = 'Edit'
	$scope.toggleMode =function(){
		$scope.mode = ($scope.mode == 'Edit') ? 'Directive': 'Edit';
	}

	$scope.addDeveloper = function(){
		$scope.mode = 'Edit';
		var developer = {name: 'Name', image: 'http://placehold.it/100x100', tags: []}
		$scope.developers.push(developer);
		$scope.currentDeveloper = developer;
	}
}

function editCtrl($scope){

	$scope.addTag = function(){
		$scope.currentDeveloper.tags.push($scope.tag);
	}

	$scope.addAll = function() {
		for (var i = $scope.developers.length - 1; i >= 0; i--) {
			$scope.developers[i].tags.push($scope.tag);
		};
	}
}

function directiveCtrl($scope){
	$scope.fields = [
		{
			label: 'Name',
			model: 'currentDeveloper.name',
			type: 'text',
			placeholder: 'Enter text here',
			required: false,
			order: 0
		},
		{
			label: 'Email',
			model: 'currentDeveloper.email',
			type: 'email',
			placeholder: 'Enter email here',
			required: true,
			order: 1
		},
		{
			label: 'Website',
			model: 'currentDeveloper.website',
			type: 'url',
			placeholder: 'Enter url here',
			required: true,
			order: 2
		},
		{
			label: 'About',
			model: 'currentDeveloper.description',
			type: 'textarea',
			placeholder: 'Enter text here',
			required: true,
			order: 3
		},
		{
			label: 'Coding Experience',
			model: 'currentDeveloper.codingExperience',
			type: 'radio',
			options: [
				{
					label: 'Junior',
					value: 'junior'
				},
				{
					label: 'Intermediate',
					value: 'intermediate'
				},
				{
					label: 'Senior',
					value: 'senior'
				},
				{
					label: 'Badass',
					value: 'badass'
				}
			]
		},
		{
			label: 'Good at Coding',
			model: 'currentDeveloper.codingGoodness',
			type: 'checkbox' 	
		},
		{
			label: 'Languages',
			model: 'currentDeveloper.languages',
			type: 'checkbox',
			options: [
				{
					label: 'Java',
					value: 'java'
				},
				{
					label: 'JavaScript',
					value: 'javascript'
				},
				{
					label: 'C++',
					value: 'c++'
				},
				{
					label: 'Python',
					value: 'python'
				},
				{
					label: 'Objective-C',
					value: 'objective-c'
				}
			]
		}
	];
}