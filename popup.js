
document.addEventListener("DOMContentLoaded",  ()=>{

  window.onload =()=>{
    var ul=document.querySelector("ul");
var del = document.getElementById("delete");
    
    // checks whether the mentioned key in the chrome storage.
//If the key that we mentioned is present  then it will create a li element and anchor element with href points to the value of that key  all this elements are append to ul.
//And then button element created with the key as an id and append to del(mentioned above).
// whenever you click that button a function will be executed which will remove that key in the chrome storage.  
    
    var instagram = chrome.storage.sync.get("Instagram", function(data) {
      if(data.Instagram){
    var li = document.createElement("li");
    li.innerHTML =`<a href="${data.Instagram}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-instagram"></i></div></a>`;
  ul.append(li);
  var Button = document.createElement("button");
  Button.setAttribute("id",'Instagram');
  Button.setAttribute("class",'delete_btn');
  Button.innerHTML=`<i class="far fa-trash-alt"></i> Instagram`;
  Button.onclick =  function del(event){
    var Id =event.target.id;
    chrome.storage.sync.remove(`${Id}`,function() {
   location.reload();
     })
  };
del.append(Button);
      }
       });
       var github = chrome.storage.sync.get("Github", function(data) {
         if(data.Github){
    var li = document.createElement("li");
        li.innerHTML =`<a href="${data.Github}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-github"></i></div></a>`;
      ul.append(li);
      var Button = document.createElement("button");
      Button.setAttribute("id",'Github');
      Button.setAttribute("class",'delete_btn');
      Button.innerHTML=`<i class="far fa-trash-alt"></i> Github`;
      Button.onclick =  function del(event){
        var Id =event.target.id;
        chrome.storage.sync.remove(`${Id}`,function() {
       location.reload();
         })
      };
    del.append(Button);
         }
           });
           chrome.storage.sync.get("hackerrank", function(data) {
             if(data.hackerrank){
              var li = document.createElement("li");
              li.innerHTML =`<a href="${data.hackerrank}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-hackerrank"></i></div></a>`;
                ul.append(li);
                var Button = document.createElement("button");
                Button.setAttribute("id",'hackerrank');
                Button.setAttribute("class",'delete_btn');
                Button.innerHTML=`<i class="far fa-trash-alt"></i> Hackerrank`;
                Button.onclick =  function del(event){
                  var Id =event.target.id;
                  chrome.storage.sync.remove(`${Id}`,function() {
                 location.reload();
                   })
                };
              del.append(Button);
             }
                     });
                     chrome.storage.sync.get("Facebook", function(data) {
                      if(data.Facebook){
                       var li = document.createElement("li");
                       li.innerHTML =`<a href="${data.Facebook}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-facebook"></i></div></a>`;
                         ul.append(li);
                         var Button = document.createElement("button");
                         Button.setAttribute("id",'Facebook');
                         Button.setAttribute("class",'delete_btn');
                         Button.innerHTML=`<i class="far fa-trash-alt"></i> Facebook`;
                         Button.onclick =  function del(event){
                           var Id =event.target.id;
                           chrome.storage.sync.remove(`${Id}`,function() {
                          location.reload();
                            })
                         };
                       del.append(Button);
                      }
                    });
                      chrome.storage.sync.get("Linkedin", function(data) {
                        if(data.Linkedin){
                         var li = document.createElement("li");
                         li.innerHTML =`<a href="${data.Linkedin}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-linkedin"></i></div></a>`;
                           ul.append(li);
                           var Button = document.createElement("button");
                           Button.setAttribute("id",'Linkedin');
                           Button.setAttribute("class",'delete_btn');
                           Button.innerHTML=`<i class="far fa-trash-alt"></i> Linkedin `;
                           Button.onclick =  function del(event){
                             var Id =event.target.id;
                             chrome.storage.sync.remove(`${Id}`,function() {
                            location.reload();
                              })
                           };
                         del.append(Button);
                        }
                              });
                              chrome.storage.sync.get("Amazon", function(data) {
                                if(data.Amazon){
                                 var li = document.createElement("li");
                                 li.innerHTML =`<a href="${data.Amazon}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-amazon"></i></div></a>`;
                                   ul.append(li);
                                   var Button = document.createElement("button");
                                   Button.setAttribute("id",'Amazon');
                                   Button.setAttribute("class",'delete_btn');
                                   Button.innerHTML=`<i class="far fa-trash-alt"></i> Amazon`;
                                   Button.onclick =  function del(event){
                                     var Id =event.target.id;
                                     chrome.storage.sync.remove(`${Id}`,function() {
                                    location.reload();
                                      })
                                   };
                                 del.append(Button);
                                }
                                      });
                                      chrome.storage.sync.get("Twitter", function(data) {
                                        if(data.Twitter){
                                         var li = document.createElement("li");
                                         li.innerHTML =`<a href="${data.Twitter}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-twitter"></i></div></a>`;
                                           ul.append(li);
                                           var Button = document.createElement("button");
                                           Button.setAttribute("id",'Twitter');
                                           Button.setAttribute("class",'delete_btn');
                                           Button.innerHTML=`<i class="far fa-trash-alt"></i> Twitter`;
                                           Button.onclick =  function del(event){
                                             var Id =event.target.id;
                                             chrome.storage.sync.remove(`${Id}`,function() {
                                            location.reload();
                                              })
                                           };
                                         del.append(Button);
                                        }
                                              });
                                              chrome.storage.sync.get("Figma", function(data) {
                                                if(data.Figma){
                                                 var li = document.createElement("li");
                                                 li.innerHTML =`<a href="${data.Figma}" target="_blank" rel="noopener noreferrer"><div class="round"><i class="fab fa-figma"></i></div></a>`;
                                                   ul.append(li);
                                                   var Button = document.createElement("button");
                                                   Button.setAttribute("id",'Figma');
                                                   Button.setAttribute("class",'delete_btn');
                                                   Button.innerHTML=`<i class="far fa-trash-alt"></i> Figma`;
                                                   Button.onclick =  function del(event){
                                                     var Id =event.target.id;
                                                     chrome.storage.sync.remove(`${Id}`,function() {
                                                    location.reload();
                                                      })
                                                   };
                                                 del.append(Button);
                                                }
                                                      });
                          

  }

  
  // when you submit the form the below function will happen.
// It takes the input value and checks whether the input values contains the word that we mentioned.
// If the mentioned word is in the input value then it locally stores the input value with  the keyword that we mentioned. 

document.getElementById("btn").onclick=function (){
var input = document.querySelector("input").value;

if (input.includes("www.instagram.com") ) {
  chrome.storage.sync.set({"Instagram": input}, function() {
     location.reload();
     });
    }else if (input.includes("www.facebook.com")){
      chrome.storage.sync.set({"Facebook": input}, function() {
     location.reload();
         });
       } 
       else if (input.includes("twitter.com") ){
        chrome.storage.sync.set({"Twitter": input}, function() {
       location.reload();
           });
         }else if (input.includes("www.linkedin.com")){
        chrome.storage.sync.set({"Linkedin": input}, function() {
     location.reload();
           });
      } else if (input.includes("www.hackerrank.com")){
        chrome.storage.sync.set({"hackerrank": input}, function() {
     location.reload();
           }); 
          } else if (input.includes("www.figma.com")){
            chrome.storage.sync.set({"Figma": input}, function() {
         location.reload();
        }); 
      } else if (input.includes("www.amazon.in")){
        chrome.storage.sync.set({"Amazon": input}, function() {
     location.reload();
           });
      } else if (input.includes("github.com")){
        chrome.storage.sync.set({"Github": input}, function() {
     location.reload();
           });
      }
}
})
            
              
