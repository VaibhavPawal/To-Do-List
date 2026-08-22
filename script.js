let taskinput = document.querySelector("#taskinput");

let button = document.querySelector("button");{
    button.addEventListener("click",function(){
        let task = taskinput.value;

console.log(task);



let ul = document.querySelector("#ul");
    let newlist = document.createElement("li");
    console.log(newlist);

    newlist.innerText = task;

    ul.append(newlist);
    

    let btn = document.createElement("button");

        btn.innerText = "Delete";

        newlist.append(btn);




    btn.addEventListener("click", function () {
    newlist.remove();
});


    })
}



let clearBtn = document.querySelector("#clrbtn");

clearBtn.addEventListener("click", function () {
    ul.innerHTML = "";
});