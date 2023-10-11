async function getapi(){
    let response=await fetch('https://restcountries.com/v3/all');
    let data=await response.json();
    //console.log(data[24].cca2);
    //console.log(createcard());



const cardContainer = document.createElement('div');
cardContainer.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
cardContainer.id="posi20"
const cardHeader = document.createElement('div');
cardHeader.classList.add('card-header');
const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = ` ${data[50].name.common}`;
     title.id="posi1"
      cardHeader.appendChild(title);
cardContainer.appendChild(cardHeader);
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
cardBody.id="posi2"
const flag = document.createElement('img');
      flag.classList.add('card-img-top');
      flag.src =  data[50].flags[0];
      cardBody.appendChild(flag);
      const capital = document.createElement('p');
      capital.classList.add('card-text');
      capital.textContent = `Capital: ${data[50].capital}`;
      cardBody.appendChild(capital);
      const region = document.createElement('p');
      region.classList.add('card-text');
      region.textContent = `Region: ${data[50].region}`;
      cardBody.appendChild(region);
      const region1 = document.createElement('p');
      region1.classList.add('card-text');
      region1.textContent = `LatIng: ${data[50].latlng}`;
      cardBody.appendChild(region1);
      const countrycode= document.createElement('p');
      countrycode.classList.add('card-text');
      countrycode.textContent = `countrycode: ${data[50].cca2}`;
      cardBody.appendChild(countrycode);

      
           
cardContainer.appendChild(cardBody);
const cardFooter = document.createElement('div');
cardFooter.classList.add('card-footer');
var button= document.createElement("button");

      button.innerHTML = "Weather";
      
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn btn-primary");
      
      cardFooter.appendChild(button);
cardFooter.id="posi17"
cardContainer.appendChild(cardFooter);
document.body.appendChild(cardContainer);
var lineBreak = document.createElement("br");
cardContainer.appendChild(lineBreak);

const cardContainer1= document.createElement('div');
cardContainer1.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
//cardContainer.setAttribute("class","posi");
const cardHeader1 = document.createElement('div');
cardHeader1.classList.add('card-header');
const title1 = document.createElement('h5');
      title1.classList.add('card-title');
      title1.textContent = ` ${data[24].name.common}`;
    title1.id="posi4"
      cardHeader1.appendChild(title1);
cardContainer1.appendChild(cardHeader1);
const cardBody1 = document.createElement('div');
cardBody1.classList.add('card-body');
const flag1 = document.createElement('img');
      flag1.classList.add('card-img-top');
 
      flag1.src = data[24].flags[1];
      cardBody1.appendChild(flag1);
      cardBody1.id="posi3"
      const capital1 = document.createElement('p');
            capital1.classList.add('card-text');
            capital1.textContent = `Capital: ${data[24].capital}`;
            cardBody1.appendChild(capital1);
            const region2 = document.createElement('p');
            region2.classList.add('card-text');
            region2.textContent = `Region: ${data[24].region}`;
            cardBody1.appendChild(region2);
            const Lating1 = document.createElement('p');
            Lating1.classList.add('card-text');
            Lating1.textContent = `LatIng: ${data[24].latlng}`;
            cardBody1.appendChild(Lating1);
            const countrycode1= document.createElement('p');
            countrycode1.classList.add('card-text');
            countrycode1.textContent = `countrycode: ${data[24].cca2}`;
            cardBody1.appendChild(countrycode1);

            var button1 = document.createElement("button");

            button1.innerHTML = "Weather";
            
            button1.setAttribute("type", "button");
            button1.setAttribute("class", "btn btn-primary");
            
            cardBody1.appendChild(button1);
                 
cardContainer1.appendChild(cardBody1);
const cardFooter1 = document.createElement('div');
cardFooter1.classList.add('card-footer');


cardContainer1.appendChild(cardFooter1);
document.body.appendChild(cardContainer1);

const cardContainer2= document.createElement('div');
cardContainer2.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
//cardContainer.setAttribute("class","posi");
const cardHeader2 = document.createElement('div');
cardHeader2.classList.add('card-header');
const title2 = document.createElement('h5');
      title2.classList.add('card-title');
      title2.textContent = ` ${data[4].name.common}`;
    title2.id="posi6"
      cardHeader2.appendChild(title2);
cardContainer2.appendChild(cardHeader2);
const cardBody2 = document.createElement('div');
cardBody2.classList.add('card-body');
const flag2 = document.createElement('img');
      flag2.classList.add('card-img-top');

      flag2.src = data[4].flags[0];
      cardBody2.appendChild(flag2);
      cardBody2.id="posi7"
      const capital2 = document.createElement('p');
            capital2.classList.add('card-text');
            capital2.textContent = `Capital: ${data[4].capital}`;
            cardBody2.appendChild(capital2);
            const region3 = document.createElement('p');
            region3.classList.add('card-text');
            region3.textContent = `Region: ${data[4].region}`;
            cardBody2.appendChild(region3);
            const Lating2 = document.createElement('p');
            Lating2.classList.add('card-text');
            Lating2.textContent = `LatIng: ${data[4].latlng}`;
            cardBody2.appendChild(Lating2);
            const countrycode2= document.createElement('p');
            countrycode2.classList.add('card-text');
            countrycode2.textContent = `countrycode: ${data[4].cca2}`;
            cardBody2.appendChild(countrycode2);
            var button2 = document.createElement("button");

            button2.innerHTML = "Weather";
            
            button2.setAttribute("type", "button");
            button2.setAttribute("class", "btn btn-primary");
            
            cardBody2.appendChild(button2);
                 
      
cardContainer2.appendChild(cardBody2);
const cardFooter2 = document.createElement('div');
cardFooter2.classList.add('card-footer');

cardContainer2.appendChild(cardFooter2);
document.body.appendChild(cardContainer2);

const cardContainer3= document.createElement('div');
cardContainer3.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
//cardContainer.setAttribute("class","posi");
const cardHeader3 = document.createElement('div');
cardHeader3.classList.add('card-header');
const title3 = document.createElement('h5');
      title3.classList.add('card-title');
      title3.textContent = ` ${data[187].name.common}`;
    title3.id="posi9"
      cardHeader3.appendChild(title3);
cardContainer3.appendChild(cardHeader3);
const cardBody3 = document.createElement('div');
cardBody3.classList.add('card-body');
const flag3 = document.createElement('img');
      flag3.classList.add('card-img-top');

      flag3.src = data[187].flags[0];
      cardBody3.appendChild(flag3);
      cardBody3.id="posi10"
      const capital3 = document.createElement('p');
      capital3.classList.add('card-text');
      capital3.textContent = `Capital: ${data[187].capital}`;
      cardBody3.appendChild(capital3);
      const region4 = document.createElement('p');
      region4.classList.add('card-text');
      region4.textContent = `Region: ${data[187].region}`;
      cardBody3.appendChild(region4);
      const Lating3= document.createElement('p');
      Lating3.classList.add('card-text');
      Lating3.textContent = `LatIng: ${data[187].latlng}`;
      cardBody3.appendChild(Lating3);
      const countrycode3= document.createElement('p');
      countrycode3.classList.add('card-text');
      countrycode3.textContent = `countrycode: ${data[187].cca2}`;
      cardBody3.appendChild(countrycode3);
      var button3 = document.createElement("button");

      button3.innerHTML = "Weather";
      
      button3.setAttribute("type", "button");
      button3.setAttribute("class", "btn btn-primary");
      
      cardBody3.appendChild(button3);
           

      
cardContainer3.appendChild(cardBody3);
const cardFooter3= document.createElement('div');
cardFooter3.classList.add('card-footer');

cardContainer3.appendChild(cardFooter3);
document.body.appendChild(cardContainer3);

const cardContainer4= document.createElement('div');
cardContainer4.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
//cardContainer.setAttribute("class","posi");
const cardHeader4 = document.createElement('div');
cardHeader4.classList.add('card-header');
const title4 = document.createElement('h5');
      title4.classList.add('card-title');
      title4.textContent = ` ${data[65].name.common}`;
    title4.id="posi11"
      cardHeader4.appendChild(title4);
cardContainer4.appendChild(cardHeader4);
const cardBody4 = document.createElement('div');
cardBody4.classList.add('card-body');
const flag4 = document.createElement('img');
      flag4.classList.add('card-img-top');

      flag4.src = data[65].flags[0];
      cardBody4.appendChild(flag4);
      cardBody4.id="posi12"
      const capital4 = document.createElement('p');
      capital4.classList.add('card-text');
      capital4.textContent = `Capital: ${data[65].capital}`;
      cardBody4.appendChild(capital4);
      const region5 = document.createElement('p');
      region5.classList.add('card-text');
      region5.textContent = `Region: ${data[65].region}`;
      cardBody4.appendChild(region5);
      const Lating4= document.createElement('p');
      Lating4.classList.add('card-text');
      Lating4.textContent = `LatIng: ${data[65].latlng}`;
      cardBody4.appendChild(Lating4);
      const countrycode4= document.createElement('p');
      countrycode4.classList.add('card-text');
      countrycode4.textContent = `countrycode: ${data[65].cca2}`;
      cardBody4.appendChild(countrycode4);
      
      
cardContainer4.appendChild(cardBody4);
const cardFooter4= document.createElement('div');
cardFooter4.classList.add('card-footer');
var button4 = document.createElement("button");

      button4.innerHTML = "Weather";
      
      button4.setAttribute("type", "button");
      button4.setAttribute("class", "btn btn-primary");
      
      cardFooter4.appendChild(button4);
           
 cardFooter4.id="posi15"
cardContainer4.appendChild(cardFooter4);
document.body.appendChild(cardContainer4);

const cardContainer5= document.createElement('div');
cardContainer5.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
//cardContainer.setAttribute("class","posi");
const cardHeader5= document.createElement('div');
cardHeader5.classList.add('card-header');
const title5 = document.createElement('h5');
      title5.classList.add('card-title');
      title5.textContent = ` ${data[87].name.common}`;
    title5.id="posi14"
      cardHeader5.appendChild(title5);
cardContainer5.appendChild(cardHeader5);
const cardBody5 = document.createElement('div');
cardBody5.classList.add('card-body');
const flag5 = document.createElement('img');
      flag5.classList.add('card-img-top');

      flag5.src = data[87].flags[0];
      cardBody5.appendChild(flag5);
       cardBody5.id="posi13"
      const capital5 = document.createElement('p');
      capital5.classList.add('card-text');
      capital5.textContent = `Capital: ${data[87].capital}`;
      cardBody5.appendChild(capital5);
      const region6 = document.createElement('p');
      region6.classList.add('card-text');
      region6.textContent = `Region: ${data[87].region}`;
      cardBody5.appendChild(region6);
      const Lating5= document.createElement('p');
      Lating5.classList.add('card-text');
      Lating5.textContent = `LatIng: ${data[87].latlng}`;
      cardBody5.appendChild(Lating5);
      const countrycode5= document.createElement('p');
      countrycode5.classList.add('card-text');
      countrycode5.textContent = `countrycode: ${data[87].cca2}`;
      cardBody5.appendChild(countrycode5);
      
      cardContainer5.appendChild(cardBody5);
      const cardFooter5= document.createElement('div');
cardFooter5.classList.add('card-footer');
var button5 = document.createElement("button");

      button5.innerHTML = "Weather";
      
      button5.setAttribute("type", "button");
      button5.setAttribute("class", "btn btn-primary");
      
      cardFooter5.appendChild(button5);
           
 cardFooter5.id="posi16"
cardContainer5.appendChild(cardFooter5);

document.body.appendChild(cardContainer5);


}
getapi();
