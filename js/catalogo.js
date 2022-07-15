var elements = document.getElementsByClassName("card");
let oldElement = null;
let p = null;

if (screen.width <= 991){ 
    var link = document.getElementsByClassName("btn-card");    
    for(let j = 0; j < link.length; j++){
        console.log(link[j]);
        link[j].setAttribute("data-bs-toggle", "modal");
        link[j].setAttribute("data-bs-target", "#exampleModal");
    }
    p = document.getElementById('parrafos_2');
}else{
    p = document.getElementById('parrafos');
}
var myFunction = function() {
    document.getElementsByClassName("empty")[0].style.display = 'none';
    document.getElementsByClassName("card-info")[0].style.display ='block';
    
    if(oldElement != null){
        oldElement.classList.remove('selected');      
        while (p.firstChild) {
            p.removeChild(p.firstChild);
        }          
    }
    oldElement = this; 
    var position = this.getAttribute("data-id");
    let i = position-1;
    let elem = this;
    elem.classList.add("selected");
    let arrP =  content[i].parrafo.split('||')
    console.log(content[i]);
    if(screen.width <= 991){       
        document.getElementById('img_icon_2').src=content[i].img
        document.getElementById('title_info_2').innerHTML = content[i].title;    
    }else{        
        document.getElementById('img_icon').src=content[i].img
        document.getElementById('title_info').innerHTML = content[i].title;
    }
    
    for(let a = 0; a<arrP.length; a++){
        let parrafo = document.createElement('p');
        parrafo.className = "text-info";
        parrafo.innerHTML = arrP[a];
        p.appendChild(parrafo)
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
