


function mouseLog(){
    var x = event.pageX;
    var y = event.pageY;

    var cursor = document.querySelector(".cat");
    // cursor.style.zIndex = "110";
    cursor.style.left = x-40 + "px";
    cursor.style.top = y-30 + "px";
    var xcollide = x-40;
    var ycollide = y-30;

    // var xcoin = getOffset(document.querySelector(".newcoin")).left;
    // var ycoin = getOffset(document.querySelector(".newcoin")).top;

    if(xcollide> 40 && xcollide < 140 && ycollide >20 && ycollide <100){
    cursor.style.width = "20%";
    cursor.style.height = "30%";
    }

    else if(xcollide> 40 && xcollide < 140 && ycollide >770 && ycollide <870){
        cursor.style.width = "20%";
        cursor.style.height = "30%";
    }

    else if(xcollide> 1440 && xcollide < 1540 && ycollide >770 && ycollide <870){
        cursor.style.width = "20%";
        cursor.style.height = "30%";
    }

    else if(xcollide> 1440 && xcollide < 1540 && ycollide >20 && ycollide <100){
        cursor.style.width = "20%";
        cursor.style.height = "30%";
    }

    // else if(xcollide == xcoin && ycollide == ycoin){
    //     cursor.style.width = "20%";
    //     cursor.style.height = "30%";

    // }
    else{
        cursor.style.width = "";
        cursor.style.height = "";

    }
    
}

function savecat(){
    console.log("saved");
    var x = event.pageX;
    var y = event.pageY;

    var container = document.querySelector("body");
    var poop = document.createElement("img");
    poop.src = "./assets/gold.png";
    // poop.innerHTML = "新年快樂";
    poop.id = "poop";

    // newcat.className = "cat";
    // newcat.style.backgroundImage = document.querySelector(".cat");
    // newcat.style.backgroundImage = "url('https://www.postatee.com/uploads/store//products/imgs/front_img/1809/full/1536136349T1Wy8U.png')";
    
    poop.style.left = x-40 + "px";
    poop.style.top = y-30 + "px";
    // newcat.style.visibility = "visible";

    container.appendChild(poop);
    // newcat.style.zIndex = 100;
    

}

// function eatcoin(){
    
//     console.log("eat");


// }



function makecoin(){

    var coincontainer = document.querySelector(".coincontainer");

    var coin = document.createElement("h2");
    coin.className = "newcoin";
    coin.innerHTML = cointext.content;

    coin.style.left = (Math.random()*1800) + 'px';


    coincontainer.appendChild(coin);
    

}


var sign1={
    title: "心有所鼠",
    description: "愛情運:100分 </br><br/> 單身者有機會遇到令你心動的對象，可多約會進行交流。已有伴的感情日日增溫！",
    image: "./assets/hearts.png",
}

var sign2={
    title: "鼠到手軟",
    description: "金錢運:100分 </br><br/> 先前有耕耘付出者，今日多能獲得好消息。有閒錢不妨拿點出來做人際關係，送小禮來表達你的關心與善意！",
    image: "./assets/coin.png",
}

var sign3={
    title: "開心鼠了",
    description: "友情運:100分 </br><br/> 今年的你好友不斷，很有機會遇見你生命中的貴人，珍惜身邊的朋友家人就是你今年該做的！",
    image: "./assets/smile.png",
}

var sign4={
    title: "鼠勾以捏",
    description: "事業運:100分 </br><br/> 不停充實自己的你，會讓身邊的人都對你刮目相看，同時也不妨藉機嘗試些新的事物，會有新的看法！",
    image: "./assets/like.png",
}


var sign5={
    title: "鼠報平安",
    description: "平安運:100分 </br><br/> 吃得健康多運動，平平安安過好年，鼠年是妳適合好好休息養生的一年！",
    image: "./assets/yoga2.png",
}


var boxes={
    content: "抽<br>!",
}

var cointext={
    content: "$",
}




    
    var boxcontainer = document.createElement("div");
    boxcontainer.id = "boxcontainer";

    var box1 = document.createElement("h3");
    var box2 = document.createElement("h3");
    var box3 = document.createElement("h3");
    var box4 = document.createElement("h3");
    var box5 = document.createElement("h3");

    // var canvas = document.querySelector(".canvas");
    var canvas = document.getElementsByClassName("canvas");
    var maincontainer = document.querySelector(".maincontainer");


function fiveboxes(){
    console.log("fiveboxes");

    box1.id = "box1";    
    box2.id = "box2";
    box3.id = "box3";
    box4.id = "box4";
    box5.id = "box5";
    box1.innerHTML = boxes.content;
    box2.innerHTML = boxes.content;
    box3.innerHTML = boxes.content;
    box4.innerHTML = boxes.content;
    box5.innerHTML = boxes.content;

    // startbutton.disappear();
    disappear();
    
    var maincontainer = document.querySelector(".maincontainer");
    maincontainer.appendChild(boxcontainer);
    boxcontainer.appendChild(box1);
    boxcontainer.appendChild(box2);
    boxcontainer.appendChild(box3);
    boxcontainer.appendChild(box4);
    boxcontainer.appendChild(box5);

}





function disappear(){
    var startbutton = document.querySelector("#start");
    startbutton.style.visibility = "hidden";
}

box1.onclick = function(){
    
    var maincontainer = document.querySelector(".maincontainer");
    var canvas = document.querySelector(".canvas");
    var coincontainer = document.querySelector(".coincontainer");
    coincontainer.style.zIndex = "200";
    
    canvas.style.zIndex = "120";
    var cursor = document.querySelector(".cat");
    cursor.style.zIndex = "130";

    console.log("sign1");
    var sign1container = document.createElement("div");
    sign1container.className = "signcontainer";

    maincontainer.appendChild(canvas);

    

    var title = document.createElement("h2");
    var image = document.createElement("img");
    var description = document.createElement("h4");

    image.src = sign1.image;
    title.innerHTML = sign1.title;
    description.innerHTML = sign1.description;
    

    title.className = "titleClass";
    description.className = "descriptionClass";
    image.className = "imageClass";

    sign1container.appendChild(title);
    sign1container.appendChild(description);
    sign1container.appendChild(image);
    maincontainer.appendChild(sign1container);
    
    
};








box2.onclick = function(){

    var maincontainer = document.querySelector(".maincontainer");
    var canvas = document.querySelector(".canvas");
    var coincontainer = document.querySelector(".coincontainer");
    coincontainer.style.zIndex = "200";

    canvas.style.zIndex = "120";
    var cursor = document.querySelector(".cat");
    cursor.style.zIndex = "130";
    console.log("sign2");
    var sign2container = document.createElement("div");
    sign2container.className = "signcontainer";

    maincontainer.appendChild(canvas);


    var title = document.createElement("h2");
    var image = document.createElement("img");
    var description = document.createElement("h4");

    image.src = sign2.image;
    title.innerHTML = sign2.title;
    description.innerHTML = sign2.description;
    

    title.className = "titleClass";
    description.className = "descriptionClass";
    image.className = "imageClass";
    image.id = "image2";

    sign2container.appendChild(title);
    sign2container.appendChild(description);
    sign2container.appendChild(image);
    maincontainer.appendChild(sign2container);
};



box3.onclick = function(){
    var maincontainer = document.querySelector(".maincontainer");
    var canvas = document.querySelector(".canvas");
    var coincontainer = document.querySelector(".coincontainer");
    coincontainer.style.zIndex = "200";

    canvas.style.zIndex = "120";
    var cursor = document.querySelector(".cat");
    cursor.style.zIndex = "130";
    console.log("sign3");
    var sign3container = document.createElement("div");
    sign3container.className = "signcontainer";

    maincontainer.appendChild(canvas);


    var title = document.createElement("h2");
    var image = document.createElement("img");
    var description = document.createElement("h4");

    image.src = sign3.image;
    title.innerHTML = sign3.title;
    description.innerHTML = sign3.description;
    

    title.className = "titleClass";
    description.className = "descriptionClass";
    image.className = "imageClass";
    image.id = "image3";

    sign3container.appendChild(title);
    sign3container.appendChild(description);
    sign3container.appendChild(image);
    maincontainer.appendChild(sign3container);
    
};


box4.onclick = function(){
    var maincontainer = document.querySelector(".maincontainer");
    var canvas = document.querySelector(".canvas");
    var coincontainer = document.querySelector(".coincontainer");
    coincontainer.style.zIndex = "200";

    canvas.style.zIndex = "120";
    var cursor = document.querySelector(".cat");
    cursor.style.zIndex = "130";
    console.log("sign4");
    var sign4container = document.createElement("div");
    sign4container.className = "signcontainer";

    maincontainer.appendChild(canvas);


    var title = document.createElement("h2");
    var image = document.createElement("img");
    var description = document.createElement("h4");

    image.src = sign4.image;
    title.innerHTML = sign4.title;
    description.innerHTML = sign4.description;
    

    title.className = "titleClass";
    description.className = "descriptionClass";
    image.className = "imageClass";
    image.id = "image4";

    sign4container.appendChild(title);
    sign4container.appendChild(description);
    sign4container.appendChild(image);
    maincontainer.appendChild(sign4container);
    
};

box5.onclick = function(){
    var maincontainer = document.querySelector(".maincontainer");
    var canvas = document.querySelector(".canvas");
    var coincontainer = document.querySelector(".coincontainer");
    coincontainer.style.zIndex = "200";

    canvas.style.zIndex = "120";
    var cursor = document.querySelector(".cat");
    cursor.style.zIndex = "130";
    console.log("sign5");
    var sign5container = document.createElement("div");
    sign5container.className = "signcontainer";

    maincontainer.appendChild(canvas);


    var title = document.createElement("h2");
    var image = document.createElement("img");
    var description = document.createElement("h4");

    image.src = sign5.image;
    title.innerHTML = sign5.title;
    description.innerHTML = sign5.description;
    

    title.className = "titleClass";
    description.className = "descriptionClass";
    image.className = "imageClass";
    image.id = "image5";

    sign5container.appendChild(title);
    sign5container.appendChild(description);
    sign5container.appendChild(image);
    maincontainer.appendChild(sign5container);

}







function doneclick(){
        alert("您今年的運勢已揭曉！明年再來吧～");
}

// var sign = document.querySelector(".signcontainer");

// sign.addEventListener("click", function(){
//     console.log("yooo");
//     doneclick()});
//     console.log("yooo");
//     doneclick();
// }


function canvasclick(){

    console.log("canvas");
    // maincontainer.removeChild(canvas);
    // alert("您已經抽過獎囉！");
    // if(maincontainer.(sign1)){
    //     console.log("removesign1");

    // }

    // else{
    //     console.log("idk yet");
    // }

    
    // maincontainer.removeChild(sign1);
    
}



// function expand(){
//     console.log("expand");
//     var maincontainer = document.querySelector(".maincontainer");

//     var container = document.querySelector("#sign1container");
//     var title = document.createElement("h2");
//     var image = document.createElement("img");
//     var description = document.createElement("p");

//     Image.src = sign1.image;
//     title.innerHTML = sign1.title;
//     description.innerHTML = sign1.description;
    
//     // container.className = "sign1container";
//     title.className = "sign1titleClass";
//     description.className = "sign1descriptionClass";
//     image.className = "sign1imageClass";

//     container.appendChild(image);
//     container.appendChild(title);
//     container.appendChild(description);
//     maincontainer.appendChild(container);

// }



// var count = 0;

// function clickCounter(){
// // console.log("good");
// count += 1;
// document.getElementById("clicks").innerHTML = count;

// }


// function displayTitle(){



//     // document.querySelector(".maincontainer").classList.toggle("newclass");

//     var maincontainer = document.querySelector(".maincontainer");
//     // var newclass = document.querySelector(".newclass");

//     var container = document.querySelector("#container");
//     var title = document.createElement("h1");
//     var dogImage = document.createElement("img");
//     var description = document.createElement("p");

//     dogImage.src = project.image;
//     title.innerHTML = project.title;
//     description.innerHTML = project.description;
    
//     container.className = "container";
//     title.className = "titleClass";
//     description.className = "descriptionClass";
//     dogImage.className = "imageClass";


//     // maincontainer.appendChild(container);
//     container.appendChild(dogImage);
//     container.appendChild(title);
//     container.appendChild(description);



//     // if(document.querySelector(".maincontainer").classList === null){
//     //     var a = 1;
//     //     // maincontainer.appendChild(newclass);
//     // }
//     // else{
//     //     newclass.appendChild(container);
//     // }
    
//     clickCounter();

//     if (count%2 == 0){
//         maincontainer.removeChild(container);
//     }
//     else {
//         maincontainer.appendChild(container);
//     }
    

   
// }




// function makecat(){
//     var maincontainer = document.querySelector(".maincontainer");

//     var container = document.querySelector("#container2");
//     var title = document.createElement("h1");
//     var catImage = document.createElement("img");
//     var description = document.createElement("p");

//     catImage.src = catproject.image;
//     title.innerHTML = catproject.title;
//     description.innerHTML = catproject.description;
    
//     container.className = "container2";
//     title.className = "cattitleClass";
//     description.className = "catdescriptionClass";
//     catImage.className = "catimageClass";

//     container.appendChild(catImage);
//     container.appendChild(title);
//     container.appendChild(description);
//     maincontainer.appendChild(container);

// }