//calling functions
document.addEventListener('DOMContentLoaded',function()
{
    

    //generating boxes using loop
    generateDisks('selDiski');
    generateDisks('selDiskii');
    generateDisks('selDiskiii');
    makeBoxes('startingNum1');
    makeBoxes('startingNum2');
    makeBoxes('startingNum3');
    generateInputs(1,5,'letterSwapTop');
    generateInputs(6,10,'letterSwapBottom');

    var darkmode = document.querySelector('.toggleButton');
    var body = document.body;
    var arrow = document.querySelector('.letterSwap');
    var title = document.getElementById("header");

    darkmode.addEventListener('click',function()
    {
        darkmode.classList.toggle("active");
        body.classList.toggle("night");
        arrow.classList.toggle("night");
        title.classList.toggle("night");
    });
   
//the Encrypt button
var encryptButton = document.getElementById('butEncry');

encryptButton.addEventListener('click', function() {
     var inputStringValue;
     



     var inputString = (document.getElementById('strInput').value);
     
     var diskOrderInputs = [
        document.getElementById('selDiski').value,
        document.getElementById('selDiskii').value,
        document.getElementById('selDiskiii').value
    ];
    var startingNum = [
        (document.getElementById('startingNum1').value),
        (document.getElementById('startingNum2').value),
        (document.getElementById('startingNum3').value)
        ];
        var swappedLetters = getSwappedLetters();
        inputStringValue = inputString + diskOrderInputs + startingNum + swappedLetters;
    //var swappedLetters = getSwappedLetters();



    outPut(inputStringValue);
});
function outPut(outputText) {
    var outPutLbl = document.querySelector('.outputStr');
    outPutLbl.textContent = outputText;
}
function generateInputs(start, end, containerId) {
    var container = document.getElementById(containerId);

    for (let i = start; i <= end; i++) {
        var li = document.createElement('li');
        li.innerHTML = `
            <input id="sL${i}i" maxlength="1" oninput="validateInput('sL${i}i')" /> 
            <-> 
            <input id="sL${i}ii" maxlength="1" oninput="validateInput('sL${i}ii')" />
        `;
        container.appendChild(li);
    }
}
function generateDisks(containerId)
{ 
    var selectElement = document.getElementById(containerId);
    var allDisks = ["Disk I","Disk II","Disk III","Disk IV","Disk V"];
    for(let i = 0; i < 5; i++)
    {
        var option = document.createElement("option");
        option.value = i+1;
        option.textContent = allDisks[i];
        selectElement.appendChild(option);
    }
}
function makeBoxes(selectId)
{
    var selectElement = document.getElementById(selectId);
    for(let i = 1; i<=26; i++)
    {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectElement.appendChild(option);
    }
}
function getSwappedLetters() {
    var input = [];
    for (var i = 1; i <= 10; i++) {
        var value1 = document.getElementById(`sL${i}i`).value;
        var value2 = document.getElementById(`sL${i}ii`).value;
        if(value1 != value2)
        {
            if (value1 !== '' && !input.includes(value1) && value2 !== '' && !input.includes(value2)) 
            {
                input.push(value1);
                input.push(value2);
            }
        }
    }
   
   return input;
}
});



//input -> swapped letters -> disks -> swapped letters -> output
class Encrypt
{
    constructor(strInput, disks, startingOrder, swappedLetters)
    {
        this.strInput = strInput;
        this.disks = disks;
        this.startingOrder = startingOrder;
        this.swappedLetters = swappedLetters;
    }

}
class swappedLetters extends Encrypt
{
    
    constructor(strInput,swappedLetters)
    {
        this.strInput = strInput;
        this.swappedLetters = swappedLetters;
    }
    configureLetters()
    {
        var strLength = swappedLetters.length;
        var twoD = [];
        for(var i = 0; i < strLength; i + 2 )
        {
            twoD.push([this.swappedLetters[i], this.swappedLetters[i + 1]]);
        }
        return twoD;
    }
    swappedLetters()
    {
        twoD = this.configureLetters();
        var strLength = this.strInput.length;
        var result = '';
        for( var i = 0; i < length ; i ++)
        {   var found = false;
            for(var j = 0; j < two.length; j ++)
            {
                if(this.strInput[i] === twoD[j][0])
                {
                   found = true;
                   result += twoD[j][1];
                   break;
                }
            }
            if(!found)
            {
                result += this.strInput[i];
            }
        }
        return result;
    }
}

class disks extends Encrypt
{
    //var i,j,k;
    constructor(disks,result,startingNum)
    {
        this.disks = disks;
        this.result = result;
        this.startingNum = startingNum;
    }
    startOrder()
    {

    }
    configureDisks(disks)
    {
        for(var i = 0; i < 3; i ++)
        {
            this.perform(parseInt(disks[i]),this.strInput,i + 1);
        }
        
    }
    perform(disk,input,order)
    {
        if(parseInt(disks[i]) == 1)
        {
            perform(1,startingNum,i+1)
        }
        if(parseInt(disks[i]) == 2)
        {
            perform(2,startingNum, i +1)
        }
        if(parseInt(disks[i]) == 3)
        {
            perform(3,startingNum, i +1)
        }
        if(parseInt(disks[i]) == 4)
        {
            perform(4,startingNum , i+1)
        }
        if(parseInt(disks[i]) == 5)
        {
            perform(5,startingNum, i + 1)
        }

    }
    disk1()
    {
       return abcdefghijklmnopqrstuvwxyz;
    }
    disk2()
    {
        return qwertyuiopasdfghjklzxcvbnm;
    }
    disk3()
    {
        return asdfghjklmnbvcxzpoiuyqwert;
    }
    disk4()
    {
        return asdzxcqwertyfghvbnmuiopjkl;
    }
    disk5()
    {
        return mnbvcxzlkjhgfdsaqwertyuiop;
    }
}