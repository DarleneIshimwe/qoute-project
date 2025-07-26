
const quotes = ["you're beutiful just the way you are!",
    "life belongs tho those who believe in positivity",
    "pay now and play later or play now and pay late",
    "you're enough",
    "you are loved", 
    "you are not alone",]
const usedIndexes = new Set()
const quotesElement = document.getElementById("quote")

 function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while(true){
         const randomIdx = Math.floor(Math.random()*quotes.length)
         if(usedIndexes.has(randomIdx))continue;

     const quote = quotes[randomIdx]
      quotesElement.innerHTML = quote
      usedIndexes.add(randomIdx)
      break;
    }
 }

