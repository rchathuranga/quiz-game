
var name='Ravindu';

let background = document.getElementById("backgroundMp3");
$(window).on('load',function () {
    // background.play();
    setInterval(function () {
        // background.play();
    },2000);
});

$('input').focus();

$('input').on('keyup',function (e) {
    if(e.keyCode==13){
        var name=$('input').val();
        sessionStorage.setItem('Name',name);
        window.location.href="../pages/game/game-view.html";
    }
})

$('#btnStart').on('click', function (e) {

    firebase.auth().signInWithEmailAndPassword("cravindu061@gmail.com", "123123123")
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            var providerId = userCredential.providerId;
            console.log("signed in", user)
            console.log("signed in", providerId)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    /*var name=$('input').val();
    sessionStorage.setItem('Name',name);
    window.location.href="pages/game-view.html";*/
})




$(window).on('load', function () {
    const firebaseConfig = {
        apiKey: "AIzaSyDfupbI-hJRQR3lyIfofiXvif-liaW8laI",
        authDomain: "test-70cc8.firebaseapp.com",
        databaseURL: "https://test-70cc8.firebaseio.com",
        projectId: "test-70cc8",
        storageBucket: "test-70cc8.appspot.com",
        messagingSenderId: "804595235386",
        appId: "1:804595235386:web:9ae6c7851353f897c59303",
        measurementId: "G-2ZW3J4MCJT"
    };
    firebase.initializeApp(firebaseConfig);
});