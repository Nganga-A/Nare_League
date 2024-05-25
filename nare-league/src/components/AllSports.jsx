import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSports } from '../features/counter/allSportsSlice';
import { Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const AllSportsComponent = () => {
const dispatch = useDispatch();
const allSports = useSelector((state) => state.allSports.data);
const loading = useSelector((state) => state.allSports.loading);
const error = useSelector((state) => state.allSports.error);
const { all_sports } = allSports || {};

useEffect(() => {
    dispatch(fetchAllSports());
}, [dispatch]);

if (loading) {
    return (
    <div className="flex justify-center items-center h-screen">
        <Loader size="big" active inline="centered">
        Loading...
        </Loader>
    </div>
    );
}

if (error) {
    return (
    <p className="text-center text-red-500 text-lg">
        Error: {error}
    </p>
    );
}

return (
    <div className="container p-6">
    <h2 className="text-2xl font-bold text-center mb-4">All Sports</h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {all_sports && all_sports.map((allSports) => (
        <li
            className="bg-slate-100 shadow-md rounded-md overflow-hidden p-3 hover:animate-bounce"
            key={allSports.sport_id}
        >
            <span className="block text-lg font-medium text-gray-800">
            {allSports.sport_name}
            </span>
        </li>
        ))}
    </ul>
    </div>
);
};

export default AllSportsComponent;
