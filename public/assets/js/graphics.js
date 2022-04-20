function imprimir(divName) {
    var printContents = document.getElementsByTagName(divName)[0].innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    document.getElementsByClassName("cards").style['grid-template-columns'] = "100%";
    document.getElementsByClassName("jobs-grid ").style['grid-template-columns'] = "100%";
    document.getElementsByClassName("page-header").style['margin-top'] = "1rem";
    document.getElementsByClassName("page-header").style['text-align'] = "right";

    window.print();

    document.body.innerHTML = originalContents;
}