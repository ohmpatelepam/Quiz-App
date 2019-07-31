const data = {
    1 : {
            question : "Who has been appointed as the new chairman of Central Board of Indirect taxes and Customs (CBIC)?",
            op1 : "Johnjoseph",
            op2 : "VanajaN.Sarna",
            op3 : "S Ramesh",
            ans : "S Ramesh",
            selected : undefined,
            timeleft : 15
        },
    2 : {
        question : "Who has been appointed as the acting Chairman of the Union Public Service Commission (UPSC)?",
        op1 : "ArvindSaxena",
        op2 : "SudhaJain",
        op3 : "KirtiKumar",
        ans : "ArvindSaxena",
        selected : undefined,
        timeleft : 15
        },
    3: {
        question : "Pappu Karki, the popular Kumaoni folk singer has passed away. He was native of which state?",
        op1 : "Jammu&Kashmir ",
        op2 : "HimachalPradesh ",
        op3 : "Uttarakhand",
        ans : "Uttarakhand",
        selected : undefined,
        timeleft : 15
    },
    4 : {
        question : "India’s first-ever national police museum will establish in which city?",
        op1 : "Chennai ",
        op2 : "Delhi  ",
        op3 : "Nagpur ",
        ans : "Delhi ",
        selected : undefined,
        timeleft : 15
    },
    5 : {
        question : "The Central Vigilance Commission (CVC) is in news for appointing Sharad Kumar as new Vigilance Commissioner. As per which committee’s recommendations, the CVC was set up?",
        op1 : "NittoorSrinivasaRaucommiittee",
        op2 : "TejendraMohanBhasincommiittee",
        op3 : "K Santhanam commiittee",
        ans : "K Santhanam commiittee",
        selected : undefined,
        timeleft : 15
    }

}

createPopUp = () => {
        let parent = document.getElementById("header");
        let modal = this.createElement("div", "modal", "myModal");
        parent.appendChild(modal);

        let modal_content = this.createElement("div", "modal-content", "");

        modal.appendChild(modal_content);

        let modal_header = this.createElement("div", "modal-header", "");

        modal_content.appendChild(modal_header);


        let heading = this.createElement("h2", "", "modal-header")

        modal_header.appendChild(heading);

        let modal_body = this.createElement("div", "modal-body", "")

        modal_content.appendChild(modal_body);

        let button = this.createElement("button","","modal-button");
        button.innerHTML = "Proceed";
        modal_content.appendChild(button);

        

        let para = this.createElement("p", "", "modal-para");

        para.style.color = "black";
        modal.style.display = "none";
        modal_body.appendChild(para);
        showPopUP();
        button.onclick = function (event) {
           if(event.target == button) {  
               modal.style.display ="none";
            }
        }
        startquiz();
}

showPopUP = () => {
        
    var full_news = `dfjkdsfnkdsnjbfkdsnfcjdshfkdsjnfckdsjfdsfdsfdsfsdvcdsfvvcsvnjf
    fdsjdsakfhdsajkfhdsjafhkjdsaflf
    sfhkjdsafhdsalkfdsalkjfkdsaf
    fdsafdsfdsaf
    dsafdsafdsafdsaf
    dsafdsfdsafdsafdsaf
    dsfdsafdsafdsafdsaf
    dsfdsafdsafdsafdsaf
    dsfdsafdsafdsf
    fdsdsafdsaf
    dsfdsafdsafdsa
    fdsafdsafdsafdsa
    fdsfdsfdsfdsf
    sdfdsafdsa
    fdsafdsa
    fdsafdsa
    fdsfdsafdsafds`;
    document.getElementById("modal-para").innerHTML = full_news;
    document.getElementById("modal-header").innerHTML = "Instruction";
    document.getElementById("myModal").style.display = "block";
}
createElement = (type, classname, id) => {

    var element = document.createElement(type);
    element.className = (classname != "") ? (classname) : ("");
    element.id = (id != "")? (id) : ("");
    return element;
}

function startquiz(){
    var main_tag = document.getElementById("main_content");
    this.createContentDiv(main_tag);
    for(i = 1;i<=5;i++){
        showquestion(i);
    }   
}
function showquestion(index){

    document.getElementById("question").innerHTML = data[index].question;
    document.getElementById("op1").value = data[index].op1;
    document.getElementById("op2").innerHTML = data[index].op2;
    document.getElementById("op3").innerHTML = data[index].op2;

}
function createContentDiv(parent_node) {
    window.Content_Div = this.createElement("div","content-div","");
    parent_node.appendChild(window.Content_Div);

    let p = this.createElement("p","","question");
    window.Content_Div.appendChild(p);
    p.innerHTML = "fdsfdsfhdskjfnsdjkndsjf\n";
    let op1 = this.createElement("input","","op1");
    op1.name = "option";
    op1.type = "radio";
    let op11 = this.createElement("p","","op11");
    op11.innerHTML = "dsad";
    window.Content_Div.appendChild(op11);
    let op2 = this.createElement("input","","op2");
    op2.type = "radio";
    op2.name = "option";
    let op22 = this.createElement("p","","op22");
    let op3 = this.createElement("input","","op3");
    op3.type = "radio";
    op3.name = "option";
    window.Content_Div.appendChild(op1);
    window.Content_Div.appendChild(op2);
    window.Content_Div.appendChild(op3);
    let next = this.createElement("button","","next");
    next.innerHTML = "Next";
    window.Content_Div.appendChild(next);
}