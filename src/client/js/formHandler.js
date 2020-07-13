function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    if (Client.checkForName(formText)) {
        
        fetch('http://localhost:2525/api/call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({
                    url: formText
                })
            })
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('results').innerHTML = res.polarity;
                document.getElementById('text').innerHTML = res.text

            })
    } else {
        if (!formText == '') {
            alert('Enter Valid URL')
        } else {
            alert('Search Field is Empty')

        }
    }
}

export { handleSubmit }