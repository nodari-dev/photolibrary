import "./theme/style.scss";
import {gql, useQuery} from "@apollo/client";


const test = gql`
    query ListPhotos {
        listPhotos {
            id
            color
            likes
            urls {
                full
                raw
                regular
            }
            created_at
            links {
                html
            }
            user {
                links {
                    html
                }
                id
                first_name
                last_name
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
    return <img src={data.listPhotos[0].urls.regular} alt=""/>
}

export default App;
