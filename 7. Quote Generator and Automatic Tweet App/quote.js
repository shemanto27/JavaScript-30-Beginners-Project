const quoteBox = document.getElementById('quoteId');
const authorBox = document.getElementById('authorId');
const quoteBtn = document.getElementById('quoteBtn');
const xBtn = document.getElementById('xId');

const api_url = 'https://quotes-api-self.vercel.app/quote';

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quoteBox.innerHTML = data.quote;
    authorBox.innerHTML = data.author; 
}

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quoteBox.innerHTML}` + `  ---by ${authorBox.innerHTML}`, 'Post X Window', 'width=600, height=300');
}

