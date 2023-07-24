import axios from "axios";
import React, { useState } from "react";
import CollegeCard from "../Pages/Home/CollegesCards/CollegeCard";
import Container from "./Container";
import { RingLoader } from "react-spinners";

const Search = () => {
  const [college, setCollege] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const searchText = form.searchText.value;

    axios
      .get(
        `https://edumind-server.vercel.app/searchCollege?name=${searchText}`
      )
      .then((res) => {
        setCollege(res.data);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="flex justify-center my-6">
        <form onSubmit={handleSubmit} className="form-control">
          <div className="input-group">
            <input
              type="text"
              name="searchText"
              placeholder="Search college"
              className="input input-bordered"
            />
            <button type="submit" className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <Container>
        {loading ? (
          <div className="fixed top-20  left-[50%]">
            <RingLoader color="#3b82f6" loading size={91} speedMultiplier={2} />
          </div>
        ) : (
          <div className="my-10">
            {college && college.name && (
              <CollegeCard college={college}></CollegeCard>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default Search;
