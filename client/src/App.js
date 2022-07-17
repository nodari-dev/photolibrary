import "./theme/style.scss";
import {gql, useQuery} from "@apollo/client";


const test = gql`
    query HomePhotos {
        homePhotos {
            id
            color
            urls {
                regular
            }
            user {
                id
                first_name
                last_name
                links {
                    html
                }
            }
            links {
                html
            }
        }
    }
`;

function App() {

    // const fetchPromise = fetch(`https://api.unsplash.com/photos/?client_id=`);
    //
    // fetchPromise
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(json => {
    //         console.log(json);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    //     ;
    const {loading, error, data} = useQuery(test, {

    });
    if (loading) return <h2>Loading...</h2>
    console.log(data);
    return <img src={data.homePhotos[0].urls.regular} alt=""/>
}

export default App;
