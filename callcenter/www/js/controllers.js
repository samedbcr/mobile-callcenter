angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

//  -------  $stateParams adres çubuğundaki belirttiğimiz id'yi(/:detayId) çeker.  --------
.controller('PlaylistsCtrl', function($scope, $stateParams) {
  $scope.firmalar = [
  { adi: 'Akbank', subeler:

  [
  {adi:'Bahçelievler', mudur:'Ahmet Yılmaz'},
  {adi:'Sarıyer', mudur:'Samed Biçer'},
  {adi:'Ümraniye', mudur:'Ahmet Ali'},
  {adi:'Kadıköy', mudur:'Ahmet Veli'},
  {adi:'Beşiktaş', mudur:'Ahmet XXX'}

  ],

  kategori: 'Banka', tel:'44404444', logo: 'http://www.akbank.com/SiteAssets/img/akbtw.jpg', id: 0 },
  { adi: 'Garanti', kategori: 'Banka', tel:'44404444', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWj6k7rvR4H_k4GK5Z109ZhOx9UmlhRclevYzRw1ELx1FCm5eOQ', id: 1 },
  { adi: 'Yıldız Teknik', kategori: 'Üniversite', tel:'44404444', logo: 'http://www.yildiz.edu.tr/images/files/ytulogopng.png', id: 2 },
  { adi: 'Boğaziçi', kategori: 'Üniversite', tel:'44404444', logo: 'https://seeklogo.com/images/B/bogazici-universitesi-logo-DB83D14A8B-seeklogo.com.png', id: 3 },
  { adi: 'Elektrik Arıza', kategori: 'Kamu', tel:'44404444', logo: 'http://www.yenidogus.net/Depo/Haber/122628/org/122628.jpg', id: 4 },
  { adi: 'Jandarma', kategori: 'Kamu', tel:'44404444', logo: 'https://i.pinimg.com/originals/fb/44/71/fb44716112f3f86326c3d2791a57c408.jpg', id: 5 },
  { adi: 'VakıfBank', kategori: 'Banka', tel:'44404444', logo: 'http://www.kimkimdir.net.tr/wp-content/uploads/2013/11/vakifbank-logo.jpg', id: 6 }

  ];

  if($stateParams.detayId >= 0) {

    console.log("selam " + $stateParams.detayId);
    console.log("Bilgi: " + $scope.firmalar[$stateParams.detayId].adi);
    $scope.bilgi = $scope.firmalar[$stateParams.detayId];

  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
