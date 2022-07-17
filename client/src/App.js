import "./theme/style.scss";

function App() {

    const fetchPromise = fetch(`https://api.unsplash.com/photos/?client_id=`);

    fetchPromise
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.error(error);
        });
    return (
        <div>
            Hello world
        </div>
    );
}

export default App;
