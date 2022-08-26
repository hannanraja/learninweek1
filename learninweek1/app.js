var html1 = document.getElementById("html");
var css1 = document.getElementById("css");
var js1 = document.getElementById("js");
var ifrm = document.getElementById("frame").contentWindow;
var btn = document.getElementById("butn");

btn.addEventListener("click", () => {
    try {
        ifrm.document.open();
        ifrm.document.write(html1.value + "<style>" + css1.value + "</style>" );
        ifrm.document.close();

    }
    catch(err) {
        alert("The error is " + err);

    }
})