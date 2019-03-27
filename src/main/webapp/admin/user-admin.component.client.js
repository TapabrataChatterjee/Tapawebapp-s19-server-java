(function(){
	var $usernameFld,$passwordFld;
	var $removeBtn, $editBtn, $createBtn;
	var $firstNameFld, $lastNameFld;
	var $userRowTemplate,$tBody;
	var userService = new AdminUserServiceClient();
	
	$(main);
	
	function main(){
		$usernameFld = $("#usernameFld");
		$firstNameFld = $("#firstNameFld");
		$lastNameFld = $("#lastNameFld");
		$passwordFld = $("#passwordFld1");
		$usernameFld.val("USERNAME");
		$passwordFld.val("PASSWORD");   
		$userRowTemplate = $(".webdev-template");
	//	$userRowTemplate.hide();
	//	var row;
		var test = userService.findAllUsers();
		test.then(function(data){
			for(var j=0;j<data.length;j++){
				 console.log(data[j]);
				 var clone = $userRowTemplate.clone();
				    clone.find(".user").html(data[j].username);
				    clone.find(".pwd").html(data[j].password);
				    clone.find(".firstname").html(data[j].firstName);
				    clone.find(".lastname").html(data[j].lastName);
					$tBody = $("tbody");
					$tBody.append(clone);
			 }
			
					 /*var clone = $userRowTemplate.clone();
						$tBody = $("tbody");
						$tBody.append(clone);
						}   */  
			 
			 
		
		
		
		})
		
		
	}
	function createUser(){}
	function deleteUser(){}
	function findAllUser(row){}
		 
		
	
		 
		
		
		
	
	function findUserById(){}
	function updateUser(){}
	
	
	
	
	
})();
