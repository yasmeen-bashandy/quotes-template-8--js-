var qoutes = [
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
  

]

function generateQoute(){

    var num = Math.floor(Math.random()*qoutes.length)
    console.log(num)

    document.getElementById("qoute").innerHTML= qoutes[num].qoute;
    document.getElementById("auther").innerHTML= qoutes[num].Auther;

}
