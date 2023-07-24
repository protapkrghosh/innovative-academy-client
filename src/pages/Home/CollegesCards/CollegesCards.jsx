import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import Container from "../../../Components/Container";
import Heading from "../../../Components/Heading";
import axios from "axios";

const CollegesCards = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get("https://edumind-server.vercel.app/allColleges")
      .then((response) => {
        setColleges(response.data.slice(0, 3));
      });
  }, []);
  return (
    <Container>
      <Heading
        title={"Popular colleges"}
        description={
          "Bangladesh is home to several reputable educational institutions, and its colleges play a crucial role in shaping the academic landscape of the country. Here's a list of the top 5 popular colleges in Bangladesh that have gained recognition for their academic excellence and overall contributions to education."
        }
      ></Heading>
      <div className="grid  gap-6 lg:grid-cols-1">
        {colleges &&
          colleges.map((college) => (
            <CollegeCard key={college.name} college={college}></CollegeCard>
          ))}
      </div>
    </Container>
  );
};

export default CollegesCards;
