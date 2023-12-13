var content = document.getElementsByTagName('body')[0];
var Title = document.querySelector('.Title');


var darkMode = document.getElementById('Darkmode');
var strTitle = document.querySelector(".strTitle");
var strCategory = document.querySelector(".strCategory");
var strTopic = document.querySelector(".strTopic");
var strHeader = document.querySelector(".strHeader");
var strContents = document.querySelector(".strContents");
var strKeywords = document.querySelector(".strKeywords");

var submit = document.getElementById('submit'); //submit button
submit.addEventListener("click",function()
{
    saveData();
});
toggleDarkMode();

//darkmode toggle switch
function toggleDarkMode()
{
    //darkmode toggle switch
    darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    strTitle.classList.toggle('night');
    strCategory.classList.toggle('night');
    strTopic.classList.toggle('night');
    strHeader.classList.toggle('night');
    strContents.classList.toggle('night');
    strKeywords.classList.toggle('night');
    submit.classList.toggle('night');
    Title.classList.toggle('night');
});
}

//saves data by downloading a text file 
function saveData()
{
    var existingData = localStorage.getItem('data') || '';

    var strTitle = document.querySelector(".strTitle").value;
    var strCategory = document.querySelector(".strCategory").value;
    var strTopic = document.querySelector(".strTopic").value;
    var strHeader = document.querySelector(".strHeader").value;
    var strContents = document.querySelector(".strContents").value;
    var strKeywords = document.querySelector(".strKeywords").value;

    var newData = `Title: ${strTitle}\nCategory: ${strCategory}\nTopic: ${strTopic}\nHeader: ${strHeader}\nContents: ${strContents}\nKeywords: ${strKeywords}\n`;
    var updatedData = existingData + newData;
    localStorage.removeItem('data');
    // Save the updated data to localStorage
    localStorage.setItem('data', updatedData);

    // Create a Blob with the data
    var blob = new Blob([updatedData], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href= URL.createObjectURL(blob);
    a.download = 'data.txt';
    a.click();

}
