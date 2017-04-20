var openBar = document.querySelector(".openbar");
var menuList = document.querySelector(".menu-list");
var closeBar = document.querySelector(".closebar");
var toogle = document.querySelector(".toogle");

toogle.addEventListener('click', function() {


        if (menuList.style.display == "block" ){
            menuList.style.display = 'none';

        }

        else {
            menuList.style.display = 'block';

        }


});
