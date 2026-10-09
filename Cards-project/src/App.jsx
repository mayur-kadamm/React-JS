import React from "react";
import Card from "./Component/card";


const App = () => {

  const jobOpenings = [
    {
      logo: "https://images.icon-icons.com/673/PNG/512/Google_icon-icons.com_60497.png",
      company: "Google",
      postedAgo: "2 days ago",
      position: "UI Developer",
      tag1: "Full Time",
      tag2: "Remote",
      pay: "$120/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://images.icon-icons.com/4037/PNG/512/meta_brands_icon_256595.png",
      company: "Meta",
      postedAgo: "1 week ago",
      position: "Junior Developer",
      tag1: "Part Time",
      tag2: "Hybrid",
      pay: "$85/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png",
      company: "Amazon",
      postedAgo: "3 days ago",
      position: "React Developer",
      tag1: "Full Time",
      tag2: "Onsite",
      pay: "$95/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://images.icon-icons.com/1/PNG/256/social_apple_mac_65.png",
      company: "Apple",
      postedAgo: "5 days ago",
      position: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Onsite",
      pay: "$110/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://images.icon-icons.com/3053/PNG/512/netflix_macos_bigsur_icon_189917.png",
      company: "Netflix",
      postedAgo: "1 day ago",
      position: "UI Developer",
      tag1: "Full Time",
      tag2: "Remote",
      pay: "$130/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://images.icon-icons.com/297/PNG/128/Icon011_31245.png",
      company: "Microsoft",
      postedAgo: "2 weeks ago",
      position: "Software Engineer",
      tag1: "Full Time",
      tag2: "Hybrid",
      pay: "$100/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://images.icon-icons.com/167/PNG/512/nvidia_23133.png",
      company: "Nvidia",
      postedAgo: "4 days ago",
      position: "Web Developer",
      tag1: "Part Time",
      tag2: "Remote",
      pay: "$90/hr",
      location: "Pune, India",
    },
    {
      logo: "https://images.icon-icons.com/1243/PNG/512/adobeacrobaticon_84142.png",
      company: "Adobe",
      postedAgo: "6 days ago",
      position: "UX Designer",
      tag1: "Part Time",
      tag2: "Hybrid",
      pay: "$75/hr",
      location: "Noida, India",
    },
    {
      logo: "https://images.icon-icons.com/3915/PNG/512/uber_logo_icon_249330.png",
      company: "Uber",
      postedAgo: "1 week ago",
      position: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Remote",
      pay: "$80/hr",
      location: "Gurugram, India",
    },
    {
      logo: "https://images.icon-icons.com/2622/PNG/512/brand_tesla_icon_158669.png",
      company: "Tesla",
      postedAgo: "3 weeks ago",
      position: "Junior Developer",
      tag1: "Part Time",
      tag2: "Onsite",
      pay: "$60/hr",
      location: "Chennai, India",
    },
  ];


  return (
    <div className="parent">
        {jobOpenings.map(function(elem){
          return <Card 
                    logo = {elem.logo}
                    companyName = {elem.company}
                    ago = {elem.postedAgo}
                    jobPosition = {elem.position}
                    tag01 = {elem.tag1}
                    tag02 = {elem.tag2}
                    amount = {elem.pay}
                    place = {elem.location}
                  />
        })}


    </div>
  )
}
export default App