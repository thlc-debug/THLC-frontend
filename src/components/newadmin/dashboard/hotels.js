"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded, BiFilterAlt } from "react-icons/bi";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const features = () => {
    setShow(!show);
  }

  const hotelview = () => {
    setSelectedRow(!selectedRow);
  }

  const formFields = [
    { label: "Name*:", type: "text" },
    { label: "Telephone No*:", type: "number" },
    { label: "Hotel Address*:", type: "text" },
    { label: "Address*:", type: "text" },
    { label: "Type of:", type: "text" },
    { label: "Per Night:", type: "number" },
    { label: "Max Guest*:", type: "number" },
    { label: "Amenities:", type: "text" }

  ];

  const img = [
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },
    { image: "/hotelimg.png" },

  ]

  useEffect(() => {
    // Simulating a delay for fetching dynamic data
    setTimeout(() => {
      setHotels([
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Pimplad Nasik, Maharashtra, India",
          photos: "+9",
          amenities: 10,
          price: "$300/person",
          rating: 4.5,
          createdDate: "22 Dec 24",
          createdTime: "09:42 PM",
          status: "Available",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },
        {
          name: "Olivia Rhye",
          hotelId: "#457863",
          location: "Maharashtra, India",
          photos: "+7",
          amenities: 5,
          price: "$200/person",
          rating: 5.0,
          createdDate: "10 Dec 24",
          createdTime: "09:42 AM",
          status: "Sold out",
        },

      ]);
    }, 1000);
  }, []);

  return (
    <div className="p-3 bg-white rounded-md h-full flex flex-col">
      {/* Header */}
      <div></div>

      {show ? (

        <div>
          <div className="flex">
            <button onClick={features} className="pr-3"><Image src="/solararrow.png" width={30} height={30} alt="backimg" /></button>
            <p className="text-2xl font-bold">Create Hotel</p>
          </div>

          <div className="flex flex-row space-x-3">


            <div className="flex flex-col px-4 py-2  mt-6 w-[50%]">

              {formFields.map((field, index) => (

                <div key={index} className=" flex flex-row my-2">
                  <div className="flex items-center  w-36 ">
                    <div className="text-gray-500">{field.label} </div>
                  </div>
                  <div>
                    <input
                      type={field.type}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
                  </div>
                </div>

              ))}

            </div>

            <div className="flex flex-col">
              <div className="text-gray-500">About Hotel*: </div>

              <textarea id="message" rows="4" class="block p-2.5 mt-3 h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

              <div className="text-gray-500 my-3">Photos*: </div>

              <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-4 w-[700px] h-[200px]">
                <div className="flex flex-col border border-gray-300 border-dashed rounded w-full h-full items-center text-center justify-center p-4 gap-3">
                  <div>
                    <Image src="/upload.png" width={30} height={30} alt="upload icon" />
                  </div>
                  <div>
                    Browse and choose the files you want to upload from your computer
                  </div>
                  <div>
                    <button><Image src="/CTA.png" width={30} height={30} alt="upload image" /></button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap w-[700px] mt-6 p-2">
                {img.map((item, index) => (
                  <Image key={index} src={item.image} height={89} width={89} className="m-1" />
                ))}
              </div>

            </div>
          </div>

          <div className="flex justify-end mt-20 mr-12">
            <button type="button" onClick={features} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
            <button type="button" onClick={openModal} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Update</button>
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

              <div className="flex flex-col rounded-xl bg-white w-[40%] h-[90%] overflow-y-auto p-6">
                <Image src="/modalimg.png" width={1000} height={1000} alt="Modal Image" />

                <div className="mt-3 flex flex-row gap-3">
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                </div>

                <div className="mt-4">
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Name:</div>
                    <div>Mumbai Taj Hotel Resorts</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Location:</div>
                    <div>American Asturias Flores 121, BA, UK</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">GST Number:</div>
                    <div>GSI7845161245ZB56</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Telephone No:</div>
                    <div>9784115599</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Hotel Mail:</div>
                    <div>depaksutharr@gmail.com</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Type:</div>
                    <div>Villa</div>
                  </div>

                  <div className="text-2xl mt-2 mb-2 p-2">Service Details</div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Rating</div>
                    <div>4.5</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">$ Per Night</div>
                    <div>$2500</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Service fee</div>
                    <div>$150</div>
                  </div>
                  <div className="flex flex-row p-2">
                    <div className="text-gray-500 w-32">Amenities:</div>
                    <div>Villa</div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button onClick={closeModal} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel</button>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Update</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      ) : (


        <div>

          {selectedRow ? (
            <div>
              <div className="flex">
                <button onClick={hotelview} className="pr-3"><Image src="/solararrow.png" width={30} height={30} alt="backimg" /></button>
                <p className="text-2xl font-bold">Hotel</p>
              </div>

              <div className="flex flex-row ">

                <div className="flex flex-col px-4 py-2  mt-6 w-[100%]">


                  <p className="font-semibold	">ID #65245</p>
                  <div className="flex flex-row text-[12px] font-thin mb-4 mt-1">
                    24 Sep. 2024   &nbsp; | &nbsp;  12:40:26 pm
                  </div>

                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Name:  </div>
                    <div>Mumbai Taj Hotel Resorts</div>
                  </div>

                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Location</div>
                    <div>American Asturias Flores 121, BA, UK</div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">GST Number</div>
                    <div>GSI7845161245ZB56</div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32"> Telephone No: </div>
                    <div>9784115599</div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Hotel Address</div>
                    <div>depaksutharr@gmail.com</div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Type</div>
                    <div>Villa</div>
                  </div>
                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Status</div>
                    <div>text</div>
                  </div>

                  <div className="text-lg mt-6 mb-2 ">
                    Service Details
                  </div>

                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Rating</div>
                    <div>4.5</div>
                  </div>

                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">$ Per Night </div>
                    <div>$2500</div>
                  </div>

                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Service fee</div>
                    <div>$150</div>
                  </div>

                  <div className="flex flex-row my-2">
                    <div className="text-gray-500 w-32">Amenities</div>
                    <div>10</div>
                  </div>

                </div>

                <div className="flex flex-col w-[100%] p-4">
                  <div className="text-gray-500  my-3">Hotel About</div>
                  <div className="text-[14px]">There is no on-site parking at this hotel. Chargeable off-site parking is available a 3-minute walk away at Waterloo Car Park (39 York Rd, Bishop’s, London, SE1 7NQ) for £15 per 12 hours and £20 per 24 hours. Payment is cash only on-site, however parking can be booked and paid online through the ‘lookingforcarpark’ website. Alternative, chargeable off-site parking is available at Waterloo Station Car Park (SE1 8SW) at £20 per 24 hours and is managed by APCOA. There is also alternative private chargeable off-site parking available nearby at Britannia Parking (SE1 7EL) at £20 per 24 hours.</div>
                  <div className="text-gray-500   my-3">Photo Gallery</div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />  
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />  
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                    <Image src="/hotelimg.png" width={89} height={89} alt="Hotel" />
                  </div>
                  <div>

                  </div>
                </div>

              </div>
              <div className="flex justify-end mt-20 mr-12">
                <button type="button" onClick={hotelview} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Update</button>
              </div>
            </div>
          ) : (

            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold">Hotel</h2>
                  <p className="text-gray-500">Total 506 Hotels</p>
                </div>
                <div className="flex space-x-3">
                  <button onClick={features} className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100">
                    Add
                  </button>
                  <button
                    className="px-4 py-2 border text-black font-semibold rounded-md hover:bg-gray-100"
                    onClick={() => alert("PDF Report Downloaded")}
                  >
                    Download PDF Report
                  </button>
                </div>
              </div>

              {/* Tabs and Search */}
              <div className="flex justify-between items-center mb-4">
                {/* Tabs */}
                <div className="bg-gray-100 rounded-md flex border  ">
                  <button
                    className={`px-6 py-2 font-medium ${activeTab === "all" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
                      }`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-6 py-2 font-medium ${activeTab === "publish" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
                      }`}
                    onClick={() => setActiveTab("publish")}
                  >
                    Publish <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">130</span>
                  </button>
                  <button
                    className={`px-6 py-2 font-medium ${activeTab === "draft" ? "bg-white border-b-2 border-black" : "text-gray-500 bg-white"
                      }`}
                    onClick={() => setActiveTab("draft")}
                  >
                    Draft <span className="ml-2 bg-gray-300 px-2 py-1 rounded-full text-sm">20</span>
                  </button>
                </div>

                {/* Search and Filter */}
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Search by name, location, hotel id..."
                    className="px-4 py-2 border text-sm rounded-md focus:outline-none w-64"
                  />
                  <button className="flex items-center px-4 py-2 text-sm border rounded-md text-gray-500 hover:bg-gray-100">
                    <BiFilterAlt className="mr-2" /> Filter
                  </button>
                </div>
              </div>

              {/* Hotels Table */}
              <div className="overflow-auto h-[65vh]">
                <table className="min-w-full bg-white border-b border-gray-200">
                  <thead className="sticky top-0 bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        <input type="checkbox" className="form-checkbox h-4 w-4" />
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Hotel Id</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Location</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Photos</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Amenities</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Rating</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                        Created Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotels.map((hotel, index) => (
                      <tr key={index} onClick={() => handleRowClick(index)} className="border-t">
                        <td className="px-6 py-4">
                          <input type="checkbox" className="form-checkbox h-4 w-4" />
                        </td>
                        <td className="px-4 py-2 text-sm font-semibold">{hotel.name}</td>
                        <td className="px-4 py-2 text-sm text-gray-500">{hotel.hotelId}</td>
                        <td className="px-4 py-2 text-sm text-gray-500">{hotel.location}</td>
                        <td className="px-4 py-2 flex items-center gap-2 text-sm text-gray-500">
                          <img src="/y1.png" className="h-10 w-10" /> {hotel.photos}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-500">{hotel.amenities}</td>
                        <td className="px-4 py-2 text-sm text-gray-500">{hotel.price}</td>
                        <td className="px-4 py-2 text-sm text-gray-500">{hotel.rating} <span className="text-yellow-300">★</span></td>
                        <td className="px-4 py-2 text-sm text-gray-500">
                          {hotel.createdDate}, {hotel.createdTime}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${hotel.status === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            {hotel.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <BiDotsVerticalRounded className="text-gray-500 w-5 h-5 cursor-pointer" />
                        </td>
                      </tr>

                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hotels;
