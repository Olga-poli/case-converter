let upperCaseButton = document.getElementById('upper-case');
let lowerCaseButton = document.getElementById('lower-case');
let properCaseButton = document.getElementById('proper-case');
let sentenceCaseButton = document.getElementById('sentence-case');
let textArea = document.querySelector('textarea');
let downloadButton = document.getElementById('save-text-file');

/**
 * @returns {string}
 */
function getTextAreaValue() {
    return textArea.value
}

/**
 * @param {string} caseOperation
 */
function updateTextAreaValue(caseOperation) {
    textArea.value = caseOperation
}

/**
 * @param {string} string
 * @returns {string}
 */
let toUpperCaseOperation = string => {
    return string.toUpperCase();
};

/**
 * @param {string} string
 * @returns {string}
 */
let toLowerCaseOperation = string => {
    return string.toLowerCase();
};

/**
 * @param {string} string
 * @returns {string}
 */
let toProperCaseOperation = string => {
    return string
        .split(/\s/g)
        .map(function (elemOfArr) {
            return elemOfArr.slice(0, 1).toUpperCase() + elemOfArr.slice(1).toLowerCase()
        })
        .join(' ')
};

/**
 * @param {string} string
 * @returns {string}
 */
let toSentenceCaseOperation = string => {
    return string.toLowerCase()
        .replace(
            /(^\s*[\w\u0430-\u044f]|[\.\!\?]\s*[\w\u0430-\u044f])/g,
            firstLetter => firstLetter.toUpperCase()
        )
};

upperCaseButton.addEventListener('click', (e) => {
    updateTextAreaValue(
        toUpperCaseOperation(
            getTextAreaValue()
        )
    )
})

lowerCaseButton.addEventListener('click', (e) => {
    updateTextAreaValue(
        toLowerCaseOperation(
            getTextAreaValue()
        )
    )
})

properCaseButton.addEventListener('click', (e) => {
    updateTextAreaValue(
        toProperCaseOperation(
            getTextAreaValue()
        )
    )
})

sentenceCaseButton.addEventListener('click', (e) => {
    updateTextAreaValue(
        toSentenceCaseOperation(
            getTextAreaValue()
        )
    )
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

downloadButton.addEventListener('click', (e) => {
    download('text.txt', getTextAreaValue())
})
