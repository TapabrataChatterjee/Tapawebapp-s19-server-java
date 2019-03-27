function AdminUserServiceClient(){
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.url = 'https://fathomless-ocean-56563.herokuapp.com/api/user';
	var self = this;
	function createUser(user, callback){}
	function findAllUsers(){
		return fetch(this.url)
		.then(function(response)
				{
			return response.json();
				});
		
		
		
	}
	function findUserById(userId, callback){}
	function deleteUser(userId , callback){}
	function updateUser(userId , callback){}
	
}