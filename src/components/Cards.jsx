import React, { useEffect, useState } from "react";
import Single from "./SecondPage";
import { Link } from "react-router";
const Cards = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json"); // Fetching from public folder
        const data = await response.json();
        setMembers(data.members.slice(0, 24)); // Limit to 24 members
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Split members into two rows
  const firstRow = members.slice(0, 12);
  const secondRow = members.slice(12, 24);

  // Reusable card component
  const MemberCard = ({ member }) => (
    <Link to={`/${member.id}`} >
      {/* <Link to="/test"> */}
    <div className=" *:w-[300px] h-[300px]  p-2 bg-[#E8E5DB] rounded-lg shadow-md   relative hover:scale-110 " onClick={Single()} >
    
    <h3 className="text-[30px] font-semibold mt-0 text-center   ">{member.name}</h3>
     <div className="*:w-[250px] h-[250px] absolute bottom-0 left-0">

      <img
        src={member.img} // Use img from JSON
        alt={member.name}
        className=" w-full h-full  "
      /> 
     </div >
     <div className="flex flex-col absolute top-0">
      <img className="w-1 h-40 absolute right-6 " src="/images/Line 10 (Stroke).png" alt="" />
   
      <a href={member.github}><img className="w-[45px] h-[45px]  absolute  p-2  right-1 bg-black rounded-full top-44 hover:scale-110" src="/images/Github (1).png" alt="" /></a>
      <a href={member.linkedin} ><img className="w-[40px] h-[40px]  absolute  p-2  right-2 bg-black rounded-xl hover:scale-110 top-60" src="/images/Linkedin (1).png" alt="" /></a>
      </div>
    </div>
    </Link>
  );

  // Function to duplicate elements for infinite scroll
  const createInfiniteRow = (members) => {
    return [...members, ...members]; // Duplicate the row for seamless animation
  };

  return (
    <div className="w-full bg-gray-800 overflow-hidden py-10 group ">
      {/* Row 1 */}
      <div className="flex gap-8 animate-scroll-left group-hover:paused">
        {createInfiniteRow(firstRow).map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
      {/* Row 2 (Opposite Direction) */}
      <div className="flex gap-8 animate-scroll-right mt-24 group-hover:paused ">
        {createInfiniteRow(secondRow).map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
