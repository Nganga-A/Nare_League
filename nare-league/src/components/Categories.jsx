import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../features/counter/categoriesSlice';

const CategoryPage = () => {
    const { sport_name } = useParams();
    const location = useLocation();
    const selectedSport = location.state?.selectedSport;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                let response;
                console.log('API response:', response);
                if (selectedSport) {
                    const selectedSportCategories = selectedSport.categories || [];
                    setCategories(selectedSportCategories);
                    console.log('Using selected sport information:',selectedSportCategories);
                } else {
                    response = await dispatch(fetchCategories(sport_name));
                    setCategories(response.payload);
                    console.log('API response:', response.payload);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
            };
    
        fetchData();
    }, [dispatch, sport_name, selectedSport]);



    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader size="big" active inline="centered">Loading...</Loader>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


return (
    <div>
    <h2>Categories for {selectedSport?.sport_name || sport_name}</h2>
    <ul>
        {categories.map((category) => (
        <li key={category.category_id}>{category.category_name}</li>
        ))}
    </ul>
    </div>
);
};

export default CategoryPage;
