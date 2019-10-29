// Application module
var crudApp = angular.module('crudApp',[]);
crudApp.controller("DbController",['$scope','$http', function($scope,$http){

// Function to get employee details from the database
getInfo();
function getInfo(){
// Sending request to EmpDetails.php files
$http.post('DatabaseFiles/empDetails.php').success(function(data){
// Stored the returned data into scope
$scope.details = data;
});
}

//Insert
$scope.insertInfo = function(info){
$http.post('DatabaseFiles/insertDetails.php',{"name":info.name,"email":info.email,"address":info.address,"gender":info.gender}).success(function(data){
if (data == true) {
getInfo();
// Hide details insertion form
$('#empForm').css('display', 'none');
}
});
}


//Edit
$scope.currentUser = {};
$scope.editInfo = function(info){
$scope.currentUser = info;
$('#empForm').slideUp();
$('#editForm').slideToggle();
}


//Update
$scope.UpdateInfo = function(info){
$http.post('DatabaseFiles/updateDetails.php',{"id":info.emp_id,"name":info.emp_name,"email":info.emp_email,"address":info.emp_address,"gender":info.emp_gender}).success(function(data){
$scope.show_form = true;
if (data == true) {
getInfo();
}
});
}

//Delete
$scope.deleteInfo = function(info){
$http.post('DatabaseFiles/deleteDetails.php',{"del_id":info.emp_id}).success(function(data){
if (data == true) {
getInfo();
}
});
}