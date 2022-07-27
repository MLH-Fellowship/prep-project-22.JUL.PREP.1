import { useState, useEffect } from "react";

const useFetch = () => {
    // ..
    const [data, setData] = useState({
        cityPrefix: "",
        results: [],
    });
    const autoCompleteURL = "https://autocomplete.search.hereapi.com/v1/autocomplete?";
    useEffect(() => {

        const timeoutId = setTimeout(() => {
            const getCities = async() => {
                try {

                    const query = `q=${data.cityPrefix}&limit=10&types=city&apiKey=9BvkEapCvTbvrjhU3CH4O1a5o_9XpBCyNkdDpVM-BxA`;
                    fetch(`${autoCompleteURL}${query}`).then((res) => res.json()).then((result) => {

                        console.log("Response", result);
                        setData({...data, results: result.items });
                    })
                } catch (err) {
                    console.log(err);
                }
            }
            getCities();
        }, 1000);
        return () => clearTimeout(timeoutId);

    }, [data.cityPrefix]);

    return { data, setData };
};

export default useFetch;