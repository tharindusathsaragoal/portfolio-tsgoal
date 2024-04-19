document.addEventListener("DOMContentLoaded", function () {
    var badges = document.querySelectorAll('.x1-badge');

    badges.forEach(function (badge, index) {
        setTimeout(function () {
            badge.classList.add('show');
        }, index * 200);
    });
});