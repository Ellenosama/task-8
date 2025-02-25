

function randomQuotes(){
   
    var quotes=["“Be yourself; everyone else is already taken.”","“So many books, so little time.”","“Be the change that you wish to see in the world.” ","“We accept the love we think we deserve.” ","“Resentment is like drinking poison and waiting for your enemies to die.”","“Do not take life too seriously. You will not get out alive.”","“The best revenge is massive success.”","“It's not what happens to you, but how you react to it that matters.”","“You miss 100% of the shots you don't take.”"];
    var names=["― Oscar Wilde ","― Frank Zappa","― Mahatma Gandhi ","― Stephen Chbosky, The Perks of Being a Wallflower","--Nelson Mandela","--Elbert Hubbard","--Frank Sinatra","--Epictetus","--Wayne Gretzy"];
    var num = Math.floor(Math.random()*quotes.length);
    var cartona = `<p>${quotes[num]}</p>`
    document.getElementById("demo").innerHTML= cartona;
     var cartonas = `<p>${names[num]}</p>`
    document.getElementById("demos").innerHTML=cartonas;
};