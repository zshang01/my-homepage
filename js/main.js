document.getElementById('message').addEventListener('click',
    function(){
        document.querySelector('.bg-model').style.display = 'flex';
        document.querySelector('#message').style.display = 'none';
    });


document.getElementById('close').addEventListener('click',
    function(){
        document.querySelector('.bg-model').style.display = 'none';
        document.querySelector('#message').style.display = 'flex';
        document.querySelector('#message').style.justifyContent = 'center';

    });

document.getElementById('submit').addEventListener('click',
    function(){
        var re = /^[A-Za-z]+/;
        var at = /\S+@\S+\.\S+/;
        var firstName = document.querySelector('#FirstName').value;
        var lastName = document.querySelector('#LastName').value;
        var email = document.querySelector('#Email').value;
        var msg = document.querySelector('#MSG').value;

        if(!re.test(firstName) === true){
            confirm("first name is wrong");
        }
        if(!re.test(lastName) === true){
            confirm("last name is wrong");
        }
        if(!at.test(email) === true){
            confirm("email is wrong");
        }
        if(msg.length === 0){
            confirm("msg is wrong");
        }
    });
