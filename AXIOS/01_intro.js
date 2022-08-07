/*
AXIOS

Librería / API que reemplaza a 'fetch()'.

npm install axios

import axios

MÉTODOS:
    - GET([url])
        .THEN(response => {
            console.log(response);
            this.setState({
                body: response.data.body,
                title: response.data.title,
            })
        })
        .CATCH(error => console.log(error));


*/

// EJEMPLO AXIOS ↓

/*
   onButtonClick() {
      const index = this.state.input;
      axios.get(`https://jsonplaceholder.typicode.com/posts/${index}`)
        .then((response) => {
          console.log(response);
          this.setState({
            body: response.data.body,
            title: response.data.title,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
*/

// EJEMPLO FETCH ↓

/*
       onButtonClick() {
      const index = this.state.input;
      fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(data => {
          console.log(data);
          this.setState({
            body: data.body,
            title: data.title
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
*/
