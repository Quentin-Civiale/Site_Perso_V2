var elements = document.querySelectorAll('.hideShow')

var createHideShowButton = function (element) {

    // on crée la span .truncate-content
    var span = document.createElement('span')
    span.className = 'hidden-content'
    span.innerHTML = element.innerHTML

    // on crée le bouton show
    var buttonShow = document.createElement('span')
    buttonShow.innerHTML = '[...] afficher la suite <i class="fas fa-arrow-down"></i>'
    buttonShow.classList.add('hide-link')

    // on crée le bouton hide
    var buttonHide = document.createElement('span')
    buttonHide.innerHTML = 'Réduire <i class="fas fa-arrow-up"></i>'
    buttonHide.classList.add('hide-link')

    // on ajoute les éléments au DOM
    element.innerHTML = ''
    element.appendChild(buttonShow)
    element.appendChild(span)

    // on met l'écouteur au click pour afficher
    buttonShow.addEventListener('click', function () {
        buttonShow.parentNode.removeChild(buttonShow)
        span.classList.add('visible')
        element.appendChild(buttonHide)
        buttonHide.parentNode.appendChild(buttonHide)
    })

    // on remet l'écouteur au click pour cacher
    buttonHide.addEventListener('click', function () {
        buttonHide.parentNode.removeChild(buttonHide)
        span.classList.remove('visible')
        element.appendChild(buttonShow)
        buttonShow.parentNode.appendChild(buttonShow)
    })
}

for(var i = 0; i < elements.length; i++) {
    createHideShowButton(elements[i])
}


/* Test de gestion des liens actifs du menu */

// $(document).ready(function () {
//     $(".navbar-nav a").removeClass("active");
//     $('#home').addClass("active");
//     $('#resume').addClass("active");
//     $('#blog').addClass("active");
// });

// $(document).on('click','.navbar-nav .nav-link', function () {
//     $(this).addClass('active').siblings().removeClass('active')
// })

// $(function(){
//     $('.navbar-nav .nav-link').click(function(){
//         $(this).addClass('active').siblings().removeClass('active');
//     });
// })

// $(".navbar-nav .nav-item").on("click", function() {
//     $(".navbar-nav .nav-item").removeClass("active");
//     $(this).addClass("active");
// });

// $('.navbar-nav .nav-link').click(function(){
//     $('.navbar-nav .nav-link').removeClass('active');
//     $(this).addClass('active');
// })

// $('.navbar-nav .nav-link').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })


// $(document).ready(function() {
//     $( ".navbar-nav .nav-link" ).click(function(event) {
//         event.preventDefault();
//         var clickedItem = $( this );
//         $( ".navbar-nav .nav-link" ).each( function() {
//             $( this ).removeClass( "active" );
//         });
//         clickedItem.addClass( "active" );
//     });
// });
