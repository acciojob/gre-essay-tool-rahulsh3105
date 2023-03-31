//your code here
const evaluatedText = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

evaluatedText.addEventListener("input", function() {
    let text = evaluatedText.value;
    text = text.trim();
    const count = text.split(/\s+/).length;
    wordCount.textContent = count;
});
