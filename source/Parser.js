
document.addEventListener('keydown', (key) => {
    if(key.shiftKey && key.ctrlKey && key.key == "P"){ openCommands() }
});

function executeCommand()
{
    var com = document.getElementById('commandInput').value;
    var args = com.split(":");
    if(args[0].toLowerCase() == "locstor")
    {
        switch(args[1].toLowerCase())
        {
            case "set":
                if(args[2] != (null || undefined || ""))
                {
                    if(args[3] != (null || undefined || ""))
                    {
                        localStorage.setItem(args[2], args[3]);
                        new NotificationInstance("Made new item on local storage", "With key: " + args[2] + "\nUse the 'get' operation to fetch it").onFinish = closeCommands;
                    }
                    else
                    {
                        new NotificationInstance('Required argument not found', "Error: ARG_NOTFOUND at ARG_SETCONTENT", "black", "lightcoral", "red");
                    }
                }
                else
                {
                    new NotificationInstance('Required argument not found', "Error: ARG_NOTFOUND at ARG_SETKEY", "black", "lightcoral", "red");
                }
                break;
            case "get":
                if(args[2] != (null || undefined || ""))
                {
                    alert(localStorage.getItem(args[2]));
                    closeCommands();
                }
                else
                {
                    new NotificationInstance('Required argument not found', "Error: ARG_NOTFOUND at ARG_GETKEY", "black", "lightcoral", "red");
                }
                break;
            case "del":
                if(args[2] != (null || undefined || ""))
                {
                    localStorage.removeItem(args[2]);
                    new NotificationInstance("Removed item", "With key: " + args[2]);
                }
                else
                {
                    new NotificationInstance('Required argument not found', "Error: ARG_NOTFOUND at ARG_DELKEY", "black", "lightcoral", "red");
                }
                break;
            default:
                new NotificationInstance('Argument not recognized', "Error: ARG_NOTRECOG at ARG_LOCSTOROPERATION", "black", "lightcoral", "red");
                break;
        }
    }
    if(args[0].toLowerCase() == "close")
    {
        closeCommands();
    }
}

/* canceled feature
function refreshSuggestionList(key)
{
    var sug = document.createElement('p');
    for(var i in commands)
    {
        sug.innerText = commands[i];
        sug.id = "sugg" + i;
        var lettersInCmd = commands[i].split(" ");
        for(var j in lettersInCmd)
        {
            if(lettersInCmd[j].includes(key))
            {
                if(document.getElementById("sugg" + i) == (null || undefined || ""))
                {
                    document.getElementById('sugDiv').appendChild(sug);
                }
            }
        }
    }
}

var commands = [
    "locStor"
]*/