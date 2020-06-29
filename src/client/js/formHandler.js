function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:2525/api/call', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.text
    })
}

export { handleSubmit }
