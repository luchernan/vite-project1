const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#0000FF", "#8A2BE2", "#FF00FF", "#f70004", "#f70004", "#000", "#000", "#000", "#fff", "#fff", "#000", "#fff", "#000", "#fff", "#000", "#fff", "#000"];


const h1 = document.getElementById("myText");


const text = h1.innerText;


let newHTML = "";


for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    newHTML += `<span style="color: ${color};">${text[i]}</span>`;
}


h1.innerHTML = newHTML;
