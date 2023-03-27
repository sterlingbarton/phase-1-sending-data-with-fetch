// Add your code here
function submitData(name, email) {
   return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(response){
        return response.json()})
    .then(function(response){
        appendData(response)

    })
    .catch(function (error) {
        document.body.innerHTML = error.message
      });
}


function appendData(obj){
    const page = document.querySelector('body');
    const div = document.createElement('div');
    div.textContent = `${obj.id}`;
    page.append(div);
}