fetch('https://www.omdbapi.com/?s=batman&y-2018&apikey=7e09ff8b')
    .then(response => response.json())
    .then(data => console.log(data));