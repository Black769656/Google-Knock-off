let searchButton = document.getElementById("searchButton");
let feelingLucky = document.getElementById("feelingLucky");
let searchInput = document.querySelector(".searchTab");

searchInput.addEventListener("keypress",handleKeyPress);

function handleKeyPress(event)
{
    if(event.key==="Enter")
    {
        performSearch();
    }
}
searchButton.addEventListener("click",function()
{
    performSearch();
});
feelingLucky.addEventListener("click",function()
{
    let options = [
        'apple',
        'ball',
        'cat',
        'monkey',
        'Magne budo',
        'James Bond',
        'Orange Juice'
    ];
    var randomS = options[Math.floor(Math.random()*options.length)];
    window.location.href = 'https://www.google.com/search?q=' + randomS;
});
function performSearch() {
    var StringInput = searchInput.value;
    var googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(StringInput);
    window.location.href = googleSearchURL;
}
