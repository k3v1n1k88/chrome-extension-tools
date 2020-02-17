import { isJsonString } from './json_utils.js';

var options1 = {
    mode: 'code',
    theme: 'ace',
    mainMenuBar: false,
    onChange: function () {
    }
};
// create editor 1
const editor1 = new JSONEditor(document.getElementById('jsoneditor1'), options1, "")

var options2 = {
    mode: 'code',
    theme: 'ace',
    mainMenuBar: false,
    onChange: function () {
    }
};
// create editor 2
const editor2 = new JSONEditor(document.getElementById('jsoneditor2'), options2, "")

// function isJsonString(str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }

document.getElementById('btn_format').addEventListener('click', function () {
    try {
        let textInput = editor1.getText();
        editor2.setText(JSON.stringify(JSON.parse(textInput), undefined, 2));
    } catch (error) {
        alert('invalid json');
    }
});