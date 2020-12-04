(function () {
    var popupCenter = function(url, title, width, height) {
        /* Réglage compatibilité affichage de la popup */
        var popupWidth = width || 640;
        var popupHeight = height || 320;
        var windowLeft = window.screenLeft || window.screenX;
        var windowTop = window.screenTop || window.screenY;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
        var popupTop = windowTop+ windowHeight / 2 - popupHeight / 2;

        var popup = window.open(url, title, 'scollbars=yes, width=' + popupWidth + ', height=' + popupHeight +
            ', top=' + popupTop + ', left=' + popupLeft);
        popup.focus();

        return true;
    }

    document.querySelector('.share_twitter').addEventListener('click', function (e) {
        e.preventDefault();
        /* Variable de l'url de l'article à partager */
        var url = this.getAttribute('data-url');

        /* Variable contenant les infos à poster sur twitter */
        var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
            "&via=quentin_civiale" +
            "&url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Twitter")
    })

    document.querySelector('.share_facebook').addEventListener('click', function (e) {
        e.preventDefault();
        /* Variable de l'url de l'article à partager */
        var url = this.getAttribute('data-url');

        /* Variable contenant les infos à poster sur facebook */
        var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);

        popupCenter(shareUrl, "Partager sur Facebook");
    })

    document.querySelector('.share_linkedin').addEventListener('click', function (e) {
        e.preventDefault();
        /* Variable de l'url de l'article à partager */
        var url = this.getAttribute('data-url');

        /* Variable contenant les infos à poster sur linkedin */
        var shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);

        popupCenter(shareUrl, "Partager sur Linkedin");
    })
})();