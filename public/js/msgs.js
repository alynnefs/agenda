angular.module("agenda",[]);
angular.module("agenda").controller("Agenda",function($scope,$http){

  $scope.initagenda=function(){
    $scope.novamsg={
      nome:"",
      endereco:"",
      telefone:""
    };
    $http({
      method : "GET",
      url : "contatos",
      headers : {
      	"Content-Type" : "application/json"
      }
    }).then(function(res){
      $scope.contatos=res.data;
    });
  };

  $scope.initagenda();
  
  $scope.rmv=function(id){
    $http({
      method : "DELETE",
      url : "contatos/"+id,
      headers : {
        "Content-Type" : "application/json"
      },
    }).then(function(res){
      $scope.initagenda();
    });
  };  

  $scope.sendmsg=function(){
    $http({
      method : "POST",
      url : "contatos",
      headers : {
        "Content-Type" : "application/json"
      },
      data:JSON.stringify($scope.novocont)
    }).then(function(res){
      alert(res.data);
      $scope.initagenda();
    });
  };
});
