import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogCard from "@/components/blog/BlogCard";
// import Category from "@/components/blog/Category";
import Hero from "@/components/blog/HeroSection";
import NewsLetter from "@/components/blog/NewsLetter";
// import Search from "@/components/blog/Search";
import React from "react";



const page = () => {
  const data1 = [
    {
      date: "7 June",
      heading: "Travel Tips for the Discerning Traveller",
      paragraph:
        "The Luxury Hotel Concierge website provides a comprehensive solution for all of your travel requirements. Whether you're looking for the greatest luxury hotels, customised travel itineraries, or insider tips for making the most of your trip, the site offers a wealth of information and personalised services to ensure an unforgettable travel experience. Explore the website for thorough articles on budget travel, solo experiences, business vacations, undervalued places, top clubs, and the greatest picture locations—all targeted to enhance your luxury travel experience.",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y1.png",
    },
    {
      date: "7 June",
      heading: "Upgrade Your Business Trips with the Help of the opulent hotel concierge",
      paragraph:
        "Travelling for both business and pleasure, sometimes known as leisure is becoming more and more common. The Luxury Hotel Concierge provides a smooth and efficient way to combine work and leisure for the discerning traveller, making business travels both pleasurable and productive.",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y2.png",
    },
    {
      date: "7 June",
      heading: "Experience Luxury: Discover Exclusive Experiences with The Luxury Hotel Concierge",
      paragraph:
        "Welcome to The Luxury Hotel Concierge, where we offer unique experiences that are catered to discerning tourists just like you, redefining luxury travel. Whether you're looking for an experience of a lifetime or a luxurious getaway, our concierge service is committed to creating exceptional experiences that go above and beyond your expectations..",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y3.png",
    },
  ];

  const data2 = [
    {
      date: "7 June",
      heading: "Luxury at Sea: A Guide to Maximising Your Cruise Experience",
      paragraph:
        "Luxury cruising is an experience of pleasure and refinement, not merely a travel. A luxury cruise offers unmatched comfort, fine food, and a wealth of activities both onboard and onshore for those looking for the height of maritime opulence. Whether on land or at sea, we at The Luxury Hotel Concierge know how to create extraordinary experiences. Here's how to use our professional advice and insights to get the most out of your luxurious cruise experience.",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y4.png",
    },
    {
      date: "7 June",
      heading: "The Ultimate Guide to Luxury Travel for Solo Travelers",
      paragraph:
        "Setting out on a solo adventure is a daring investigation of adventure and self-discovery. The Luxury Hotel Concierge is the best partner for organising unmatched experiences if you're a lone traveller looking for the ultimate in luxury. Find out how our professional guidance and specialised services may help you enhance your solo travel experience.",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y5.png",
    },
    {
      date: "7 June",
      heading: "Powerful Travel guide and Top offers for Top Hotels around!",
      paragraph:
        "I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn’t work...",
      button_text: "By Mark Tuchel",
      time: "7 min read",
      image: "./y6.png",
    },
  ];
  return (
    <div className="font-f_3">
      <Header />
      <Hero />
      {/* <Search /> */}
       <div className="flex flex-col gap-5 mt-10">
       {
           data1.map((data,i)=>{
               return <BlogCard key={i} data={data}/>
           })
      }
       </div>
       <NewsLetter/>
       <div className="flex flex-col gap-5 mt-10">
       {
           data2.map((data,i)=>{
               return <BlogCard key={i} data={data}/>
           })
      }
       </div>
       {/* <Category/> */}
       <Footer/>
    </div>
  );
};

export default page;
