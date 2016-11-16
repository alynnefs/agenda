angular.module("agenda",[]);
angular.module("agenda").controller("Agenda",function($scope,$http){

  $scope.isEditable = [];

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
      $scope.isEditable.push(false);
    });
  };

  $scope.initagenda();
  
  $scope.removerContato=function(id){
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

  $scope.atualizarContato=function(_c){
    id = _c.idcontato;
    delete _c["idcontato"];
    delete _c["$$hashKey"];
    
    $http({
      method : "PUT",
      url : "contatos/"+id,
      headers : {
        "Content-Type" : "application/json"
      },
      data:JSON.stringify(_c)      
    }).then(function(res){
      $scope.isEditable[id]=false;
      $scope.initagenda();
    });
  };  
  


  $scope.editarContato=function(id){
    $scope.isEditable[id]=true;
    $scope.initagenda();
  };

  $scope.adicionarContato=function(){
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
