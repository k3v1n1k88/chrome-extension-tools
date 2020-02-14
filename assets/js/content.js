chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
    document.body.style.background = "black";
    chrome.runtime.sendNativeMessage('com.my_company.my_application',
    { text: "" },
    function (response) {
        alert("Received " + response);
        sendResponse({msg: response});
    });
}