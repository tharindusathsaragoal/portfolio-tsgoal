function setDarkTheme() {
    document.documentElement.classList.add("dark");
    $('#light_theme').removeClass('active');
    $('#dark_theme').addClass('active');
};

setDarkTheme();