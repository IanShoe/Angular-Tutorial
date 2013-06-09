function indexCtrl($scope) {

}

function homeCtrl($scope) {

}

function listCtrl($scope) {
	$scope.developers = [
	{
		name: 'Ian Shoemaker',
		image: 'images/fuuuface.png',
		tags: ['Web', 'Node', 'Java', 'Angular', 'Asian']
	},
	{
		name: 'Derek Hall',
		image: 'images/fuuuface.png',
		tags: ['Web', 'Node', 'Java', 'Angular', 'Badass']
	},
	{
		name: 'Ken Frazier',
		image: 'images/fuuuface.png',
		tags: ['iOS', 'Android', 'Meathead']
	},
	{
		name: 'Donald Renner',
		image: 'images/fuuuface.png',
		tags: ['Web', 'Java', 'Kiosk', 'Android', 'Blackberry']
	},
	{
		name: 'Joe Sharp',
		image: 'images/fuuuface.png',
		tags: ['Web', 'Javascript', 'Java', '']
	},
	{
		name: 'Ryan Chandler',
		image: 'images/fuuuface.png',
		tags: ['Java', 'Web', 'Kiosk', 'Hadoop']
	},
	{
		name: 'Ryan Bohn',
		image: 'images/fuuuface.png',
		tags: ['Javascript', 'Javascript Ninja', 'Web', 'Node']
	},
	{
		name: 'John Mann',
		image: 'images/fuuuface.png',
		tags: ['Web', 'Javascript', 'Doesn\'t like beandipping']
	},
	{
		name: 'Bill Kratzer',
		image: 'images/fuuuface.png',
		tags: ['Dancer', 'Bacon', 'Web', 'Java', 'Javascript', 'Kiosk']
	},
	{
		name: 'Clint Martin',
		image: 'images/fuuuface.png',
		tags: ['Noobie', 'Javascript', 'Node', 'Fresh Outta College']
	},
	{
		name: 'Dave Sailer',
		image: 'images/fuuuface.png',
		tags: ['iOS', 'Android']
	},
	{
		name: 'Derek Ivey',
		image: 'images/fuuuface.png',
		tags: ['Ginger', 'Systems Dude', 'Networking']
	}]

	$scope.currentDeveloper = $scope.developers[0];

	$scope.searchSort = '';

	$scope.selectDeveloper = function(developer){
		$scope.currentDeveloper = developer;
	}

	$scope.mode = 'Edit'
	$scope.toggleMode =function(){
		if($scope.mode == 'Edit'){
			$scope.mode = 'Directive';
		}
		else {
			$scope.mode = 'Edit';
		}
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

}