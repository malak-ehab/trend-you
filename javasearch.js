
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("srl");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("srla")[0];
        txtValue = a.textContent || a.innerText;
        if (filter && txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
myFunction()
document.addEventListener("DOMContentLoaded", function() {
    var ul = document.getElementById("myUL");

    // Function to handle clicks on search results
    ul.addEventListener("click", function(e) {
        var target = e.target;
        if (target.tagName === "A") {
            document.getElementById("myInput").value = ""; // Clear input field
            ul.style.display = "none"; // Hide search results
        }
    });

    // Function to show search results
    function showSearchResults() {
        ul.style.display = "block"; // Show search results
    }

    // Call myFunction when input changes
    var input = document.getElementById("myInput");
    input.addEventListener("input", function() {
        myFunction();
        showSearchResults(); // Show search results on input change
    });
});