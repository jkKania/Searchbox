$(() => {
    $('a.link').click(function () {
        $('a.link').removeClass('active');
        $(this).addClass('active');
    });
});

function clearSearchBox() {
    document.getElementById('searchBox').value = '';
    filterSearchbox();
    document.title = "SearchboxApp";
}

function filterSearchbox() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.title = txtValue;
        } else {
            li[i].style.display = "none";
        }
    }
}