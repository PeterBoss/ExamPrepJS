window.onload = function () {
    var a = document.getElementById("CE");
    var svgDoc = a.contentDocument;
    var svgItem = svgDoc.getElementById("svg2");

    console.log(svgItem);

    var isClicked = false;
    var firstClick = true;
    var current;
    var next;
    var id;

    $("path", svgItem).click(function () {
        if (!isClicked) {
            current = $(this);
            id = current.attr('id');
            if (!firstClick) {
                next.css("fill", "#c0c0c0");
            } else {
                firstClick = false;
            }
            current.css("fill", "red");
            isClicked = true;
        } else {
            next = $(this);
            id = next.attr('id');
            if (next !== current) {
                current.css("fill", "#c0c0c0");
                next.css("fill", "red");
            }
            isClicked = false;
        }
        getData(id);
    });
};


function getData(id) {
    console.log(id);

    var xmlhttp = new XMLHttpRequest();
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + id;
    var JSONObjects;
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
        {
            JSONObjects = JSON.parse(xmlhttp.responseText);
            JSONLoaded();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function JSONLoaded()
    {
        console.log(JSONObjects[0].name);
        console.log(JSONObjects[0].population);
        console.log(JSONObjects[0].area);
        console.log(JSONObjects[0].borders);
    }
}

