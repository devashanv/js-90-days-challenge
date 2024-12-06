//initialize
const wordInfo = document.getElementById("word_info");
const wordDef = document.getElementById("word-def");
const searchWord = document.getElementById("search_word");
const btnSearch = document.getElementById("btn_search");
const resultBox = document.getElementById("result_box");

btnSearch.addEventListener("click", () => {
    const inpWord = document.getElementById("inp_word").value;

    //fetching from api
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + inpWord)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        resultBox.style.display = "block";
        resultBox.innerHTML = `
                <div class="word-box">
                    <h3 class="word text-success" id="search_word">
                        ${inpWord}
                    </h3
                    <p class="def-word" id="word_info">
                        ${data[0].meanings[0].partOfSpeech}
                        <span>
                            /${data[0].phonetic}
                        </span>
                    </p>
                </div>
                <div class="desription-box">
                    <p class="txt-desc" >
                        ${data[0].meanings[0].definitions[0].definition}
                    </p>
                    <p class="txt-example" id="word-def">
                        ${data[0].meanings[0].definitions[0].example || ""}
                    </p>
                </div>

        `
    })
});