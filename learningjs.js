//get the slider items using array.form[es6 feature]
var sliderimages = Array.from(document.querySelectorAll('.slider-container img'));

//get the number of the slides

var slidercount = sliderimages.length;

//set the current slide

var currentslide=3;

//set the slide number element in an string output

var slideNumberElement =  document.getElementById('slide-number');

//previous and next buttons

var prevbutton = document.getElementById('prev');
var nextbutton = document.getElementById('next');

//next slide function

function nextslide()
{
    
    console.log("next");
}

//prev slide function

function prevslide()
{
    console.log("prev");
    
}

//handle the onclicke of next and prev buttoms

prevbutton.onclick = prevslide;
nextbutton.onclick = nextslide;


//craet the main ul

var paginationElement = document.createElement('ul');

//set id on created ul

paginationElement.setAttribute('id','pagination-ul');

//creat list item accordimg on the slides count

for(var i=1 ; i<=slidercount ;i++)
{
  
    //creat the li
var paginationItems = document.createElement('li'); 
    
    //set custom attribute
    
    paginationItems.setAttribute('data-index',i);
    
    //set the item content
    
    paginationItems.appendChild(document.createTextNode(i));
    
    //append item to the main ul
    paginationElement.appendChild(paginationItems);
    
    
 }



//add the created ul into the page


document.getElementById('indecator').appendChild(paginationElement);


//get the created ul in an variable
var paginationcreatedul= document.getElementById('pagination-ul');

//get the pagination items(li) using array.form[es6 feature]
var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through the pagination bullets
for(var i=0 ; i<paginationbullets.length ; i++)
    {
        paginationbullets[i].onclick = function()
        {
            currentslide =parseInt( this.getAttribute('data-index'));
           
            theCheker();
        }
        
    }


//create the checker function
function theCheker()

{
  //set the slider number up to show  
slideNumberElement.textContent='Slide#' + (currentslide) + ' Out Of  '+ (slidercount) ;
    
    //remove any class active from images
     removeAllActive();
    
    //set the active class on the current slide
     sliderimages[currentslide-1].classList.add('active');
    
    //set  active class on the  created in js pagination  items
    paginationcreatedul.children[currentslide-1].classList.add('active');
    
    //check if the slide is the first slide
    if(currentslide == 1)
        {
            prevbutton.classList.add('disabled');
        }
    else
        {
            prevbutton.classList.remove('disabled');
        }
    
       
    //check if the slide is the last slide
    if(currentslide == slidercount )
        {
            nextbutton.classList.add('disabled');
        }
    else
        {
            nextbutton.classList.remove('disabled');
        }
}


//remove the active class from all the images and pagination items
function removeAllActive()
{
    //loop through images
    sliderimages.forEach(function(img){
        
        //remove active class from any img
        img.classList.remove('active');
    });
    
    //loop through the li og the pagination ul
    paginationbullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
    
}


//trigger thechecker function
theCheker();


//the next button function

function nextslide(){
    if(nextbutton.classList.contains('disabled'))
        {
            //do nothing
            return false;
        }
    else
        {
            currentslide++;
            theCheker();
        }
}


//the prev button function

function prevslide(){
     if(prevbutton.classList.contains('disabled'))
        {
            //do nothing
            return false;
        }
    else
        {
            currentslide--;
            theCheker();
        }
}






















