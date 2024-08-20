fetch('index.php')
.then(response => response.json())
    .then(data => {
      
      const cardcontainer = document.querySelector('#cardcontainer');
        data.forEach(item => {                    
          const listItem = document.createElement('li');
            listItem.textContent = JSON.stringify(item);
            cardcontainer.appendChild(listItem);
        });
    })
.catch(error => console.error('Error:', error));