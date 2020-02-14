// create the editor 2 before
let isJSONString = function (str) {
    console.error("check json");
    if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
    } else {
        return false;
    }
}
const editor2 = new JSONEditor(document.getElementById('jsoneditor2'), {
    onChange: function () {
        try {
            editor1.set(editor2.get());
        } catch (error) {
        }
    }
})
var options = {
    mode: 'code',
    theme: 'ace',
    onChange: function () {
        try {
            editor2.set(editor1.get())
        } catch (error) {
        }
    }
};

// create editor 1
const editor1 = new JSONEditor(document.getElementById('jsoneditor1'), options)

// get json
const updatedJson = editor1.get()
