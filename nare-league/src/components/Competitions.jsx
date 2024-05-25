import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompetitions } from '../features/counter/competitionSlice.js';
import { renderImageWithFallback, DEFAULT_IMAGE_URL } from './../utils/imageUtils.js';

const CompetitionsComponent = () => {
const dispatch = useDispatch();
const competitions = useSelector((state) => state.competitions.data);
const loading = useSelector((state) => state.competitions.loading);
const error = useSelector((state) => state.competitions.error);
const {top_soccer, all_sports } = competitions
// console.log(top_soccer);

useEffect(() => {
    dispatch(fetchCompetitions());
}, [dispatch]);
// console.log(competitions.top_soccer);
return (
    <div>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <h2>Competitions</h2>
    <ul>
    {top_soccer && top_soccer.map((competition) => (
        <li key={competition.competition_id}>
            <img
                src={renderImageWithFallback(competition.flag)}
                alt={competition.competition_name}
            />
            <span>{competition.competition_name}</span>
        </li>
        ))}
    </ul>
    </div>
);
};

export default CompetitionsComponent;