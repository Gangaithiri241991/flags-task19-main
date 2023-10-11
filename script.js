async function getapi(){
    let response=await fetch('https://restcountries.com/v3/all');
    let data=await response.json();

    const cardContainer = document.createElement('div');
    cardContainer.id="posi20"
    {data ?.map((e, idx)=> {
        
    cardContainer.classList.add('card','row', 'col-lg-4', 'col-sm-12'); 
   
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = ` ${e.name.common}`;
         title.id="posi1"
          cardHeader.appendChild(title);
    cardContainer.appendChild(cardHeader);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.id="posi2"
    const flag = document.createElement('img');
          flag.classList.add('card-img-top');
          flag.src =  e.flags[0];
          cardBody.appendChild(flag);
          const capital = document.createElement('p');
          capital.classList.add('card-text');
          capital.textContent = `Capital: ${e.capital}`;
          cardBody.appendChild(capital);
          const region = document.createElement('p');
          region.classList.add('card-text');
          region.textContent = `Region: ${e.region}`;
          cardBody.appendChild(region);
          const region1 = document.createElement('p');
          region1.classList.add('card-text');
          region1.textContent = `LatIng: ${e.latlng}`;
          cardBody.appendChild(region1);
          const countrycode= document.createElement('p');
          countrycode.classList.add('card-text');
          countrycode.textContent = `countrycode: ${e.cca2}`;
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
})}
}
getapi();