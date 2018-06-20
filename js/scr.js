document.addEventListener("DOMContentLoaded", function(event) {
 



    //ADD NEW CONTACTS AND OUTPUT

    document.querySelector('#add_form').onsubmit = function addNewTelephoneNumber(e) {

        e.preventDefault();
        fetch(
            'php/post.php',
            {
                method:'post',
                body: new FormData(document.querySelector('#add_form'))
            }
        )
          .then(contactsOutput)

    }
    
    


    // OUTPUT LIST

    function contactsOutput() {

        fetch('php/data.php')
              .then(response => response.json())
              .then(telephone => {
                const sorted = telephone.sort((a,b) => a.first_name > b.first_name ? 1 : -1);
                document.querySelector("#output").innerHTML = sorted.map((cont,i) => {  

                    return `<div data-value="${cont.telephone_number_id}" class="contactrow">
                                <p class="index">${i+1}.</p>
                                <div class="contact">
                                    <p class="fname">${cont.first_name}</p>
                                    <p class="lname">${cont.last_name}</p>
                                    <p class="phone">${cont.telephone_number}</p>
                                </div>
                                <button id="del" type="button" class="delbtn">Delete</button>
                           
                            </div>`
                       
                

                }).join('');
            })
    
    }
    

   
    // SEARCH REFRESH TABLE

    function refreshTable(telephoneNumbers) {
    
        document.querySelector("#numbers_list").innerHTML = "";
    
        telephoneNumbers.map((cont,i) => {
                  
            let row = `
                <div data-value="${cont.telephone_number_id}" class="contactrow">
                                <p class="index">${i+1}.</p>
                                <div class="contact">
                                    <p class="fname">${cont.first_name}</p>
                                    <p class="lname">${cont.last_name}</p>
                                    <p class="phone">${cont.telephone_number}</p>
                                </div>
                                <button id="del" type="button" class="delbtn">Delete</button>
                           
                            </div>
            `;
    

            if (search.value.length<1) {
    
                return document.querySelector("#numbers_list").innerHTML = "";
            }
            
            else {
    
                return document.querySelector("#numbers_list").innerHTML += row;
            
            }
        })
    }



    
    //SEARCH CONTACTS INPUT

    document.querySelector('#search').onkeyup = function searchTelephoneNumbers(e) {
    
        let searchWord = e.currentTarget.value;
        fetch(`php/search.php?search=${searchWord}`)
            .then(response => response.json())
            .then(telephoneNumbers => refreshTable(telephoneNumbers))
    
    }





    //DELETE ITEMS

    $('#output').on('click', 'button', function () {
        var uid = $(this).parent().attr('data-value');
     
            var vars = {
                uid: uid
            };


            $.post('php/delete.php', vars, function (data) {
                contactsOutput();
                console.log(this);
            })

    })


    $('#numbers_list').on('click', 'button', function () {
        var uid = $(this).parent().attr('data-value');
     
            var vars = {
                uid: uid
            };

            $(this).parent().hide();

            $.post('php/delete.php', vars, function (data) {
                contactsOutput();
                console.log(this);
            })

    })




    
    //CALLING OUTPUT

    contactsOutput();

 

});


    
  
        
