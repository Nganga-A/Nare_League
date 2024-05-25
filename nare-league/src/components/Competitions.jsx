import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompetitions } from '../features/counter/competitionSlice.js';
import { DEFAULT_IMAGE_URL } from './../utils/imageUtils.js';
import { Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const CompetitionsComponent = () => {
    const dispatch = useDispatch();
    const competitions = useSelector((state) => state.competitions.data);
    const loading = useSelector((state) => state.competitions.loading);
    const error = useSelector((state) => state.competitions.error);
    const { top_soccer } = competitions || {};

    useEffect(() => {
        dispatch(fetchCompetitions());
    }, [dispatch]);

    const handleImageError = (e) => {
        e.target.src = DEFAULT_IMAGE_URL;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader size='big' active inline="centered">Loading...</Loader>
            </div>
        );
        }

    if (error) {
        return <p className="text-center text-red-500 text-lg">Error: {error}</p>;
    }

    return (
        <div className='container p-6'>
        <h2 className='text-2xl font-bold text-center mb-4'>Competitions</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {top_soccer && top_soccer.map((competition) => (
            <li className='bg-slate-100 shadow-md rounded-md overflow-hidden p-3 hover:animate-bounce' key={competition.competition_id}>
                <img
                className='w-full h-48 object-cover'
                src={competition.flag}
                alt={competition.competition_name}
                onError={handleImageError}
                />
                <span className='block text-lg font-medium text-gray-800 '>{competition.competition_name}</span>
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default CompetitionsComponent;
