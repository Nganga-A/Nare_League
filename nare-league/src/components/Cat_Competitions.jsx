import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCat_Competitions } from './../features/counter/Cat_CompetitionsSlice';

const CompetitionsPage = () => {
    const { category_name } = useParams();
    const location = useLocation();
    const selectedCategory = location.state?.selectedCategory;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cat_competitions, setCat_Competitions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                if (selectedCategory && selectedCategory.competitions) {
                    console.log('Using selectedCategory:', selectedCategory);
                    setCat_Competitions(selectedCategory.competitions);
                } else {
                    const response = await dispatch(fetchCat_Competitions(category_name));
                    const fetchedCompetitions = response.payload;
                    setCat_Competitions(Array.isArray(fetchedCompetitions) ? fetchedCompetitions : []);
                    console.log('API response:', fetchedCompetitions);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [dispatch, category_name, selectedCategory]);
    
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
    console.log('Me :',selectedCategory); 
    return (
        <div className='container p-6'>
            <h2 className="text-2xl font-bold text-center mb-4">Competitions under {selectedCategory?.category_name|| category_name}</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat_competitions.map((competition) => (
                    <li className="bg-slate-100 shadow-md rounded-md overflow-hidden p-3 hover:animate-scaleUpAndDown" key={competition.competition_name}>
                        {competition.competition_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompetitionsPage;
