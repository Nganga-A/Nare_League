import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
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
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                let response;
                console.log('API response:', response);
                if (selectedSport) {
                    const selectedSportCategories = selectedSport.categories || [];
                    setCategories(Array.isArray(selectedSportCategories) ? selectedSportCategories : []);
                    console.log('Using selected sport information:',selectedSportCategories);
                } else {
                    response = await dispatch(fetchCategories(sport_name));
                    const fetchedCategories = response.payload;
                    setCategories(Array.isArray(fetchedCategories) ? fetchedCategories : []);
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
    <div className='container p-6'>
    <h2 className="text-2xl font-bold text-center mb-4">Categories under {selectedSport?.sport_name || sport_name}</h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.isArray(categories) && categories.map((category) => (
        <li className="bg-slate-100 shadow-md rounded-md overflow-hidden p-3 hover:animate-scaleUpAndDown" key={category.category_name}>
            <span className="block text-lg font-medium text-gray-800">
            <Link
                className='text-gray-800'
                to = {{
                    pathname: `/categories/${category.category_name}`}}
                    state= {{selectedCategory: category}}
                    onClick = {() => setSelectedCategory(category)}
            >
            {category.category_name}
            </Link>
            </span>
            </li>
        ))}
    </ul>
    </div>
);
};

export default CategoryPage;
