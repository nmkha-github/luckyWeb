function readTextFile(path)
{
    var rawFile = new XMLHttpRequest();
    var result = "";
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                result = allText;
            }
        }
    }
    rawFile.send(null);
    return result;
}