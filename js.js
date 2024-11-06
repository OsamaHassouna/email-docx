// function topFunction(id) {
//     // $('html, body').animate({ scrollTop: $(id).offset().top - 80 }, 'slow');
//     // document.getElementById(id).scrollIntoView();
//     var element_height = document.getElementById(id).height;
//     document.body.scrollTop = element_height - 80;
//     // document.body.scrollTop = 0;
//     // document.documentElement.scrollTop = 0;
// }
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function myFunction(containerid) {
//     var copyText = document.getElementById("containerid");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);

//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied: " + copyText.value;
// }

// function outFunc() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy";
// }

function CopyToClipboard(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        // var tooltip = document.getElementById(containerid + " ~ #myTooltip");
        // tooltip.innerHTML = "Copied ";
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        // var tooltip = document.getElementById(containerid + " ~ #myTooltip");
        // tooltip.innerHTML = "Copied";
    }
}