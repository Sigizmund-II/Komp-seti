let name1st = document.getElementsByTagName("input")[0];
let name2nd = document.getElementsByTagName("input")[1];
let area = document.getElementById("cities");



let streetadress1 = document.getElementById("user2");
let streetadress2 = document.getElementById("user3");
let city = document.getElementById("user4");
let state = document.getElementById("user5");
let ind = document.getElementById("user6");
let post = document.getElementById("number");

let btn = document.getElementsByClassName("but")[0];
let arr =[];

btn.addEventListener("click",()=>{
    if(name1st.value && 
        name2nd.value && 
        area.value &&
        streetadress1.value && 
        streetadress2.value && 
        city.value && 
        state.value && 
        ind.value && 
        post.value){
            let allSelects = new Array();
            allSelects.push(document.getElementById("cities") , document.getElementById("number"));
        for (let i = 0; i < allSelects.length; i++) {
            if(allSelects[i].value==="Please select") {
                alert("choose a " + allSelects[i].dataset.description)
                return;
            }}
        let user = new User (name1st.value, name2nd.value, area.value, streetadress1.value, streetadress2.value, city.value, state.value, ind.value, post.value);
        user.showUser();
        user.render();
    } else {
        
        let allInputs = Array.from(document.getElementsByTagName("input"));
       

        for (let i = 0; i < allInputs.length; i++) {
            if(allInputs[i].value==="") {
                alert("enter a " + allInputs[i].dataset.description)
                return;
            }
            
        }
        
            
        }

        


        // !inpName1st.value ? (alert("enter a first name")) : "";
        // !inpName2nd.value ? (alert("enter a second name")) : "";
        // Area.value==="Please select" ? (alert("select area")) : "";
        // !StreetAdress1.value ? (alert("enter a street address")) : "";
        // !StreetAdress2.value ? (alert("enter a street address")) : "";
        // !City.value ? (alert("enter a city")) : "";
        // !State.value ? (alert("enter a state")) : "";
        // !ind.value ? (alert("enter an index")) : "";
        // !post.value ? (alert("select address")) : "";
    }
    
   
)

let str = `wewrwet jhjb lkjlkj ${arr}}`


class User {
    constructor(name1st, name2nd, area, streetadress1, streetadress2, city, state, ind, post) {
        this.counter = i++;
        this.name1st = name1st;
        this.name2nd = name2nd;
        this.area = area;
        this.streetadress = streetadress1 + streetadress2;
        this.city = city;
        this.state = state;
        this.ind = ind;
        this.post = post;
        this.interface = `
        User #${this.counter}:
        First name is ${this.name1st},
        Second name is ${this.name2nd},
        Area is ${this.area},
        Street address is ${this.streetadress},
        City is ${this.city},
        State is ${this.state},
        Index is ${this.ind},
        Address is ${this.post}
    `; 
    }

    showUser(){
        console.log(this);
    }

    render() {

        
        let elem = document.createElement("div");
        elem.id = this.name1st+ this.counter;
        elem.classList.add("user");
        elem.innerHTML = this.interface;
        let cont = document.querySelector(".showusers");
        cont.appendChild(elem);






    }


}



let i = 0;