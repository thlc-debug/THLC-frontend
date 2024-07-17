"use client"
import React, {useState} from 'react'

const reviews=[
  {
    id:1,
    name:"Pamela Halpert",
    photo:"/pam.jpeg",
    heading:"by pam",
    rev:"Lorem ipsum dolor sit amet. Ut numquam omnis et dignissimos maxime ut quae iste est voluptatem voluptates. Et architecto autem aut doloribus repudiandae sed omnis omnis ut voluptas veniam vel quidem expedita! Est nihil ratione in temporibus vero quo quia pariatur a velit repudiandae? Aut iure aliquam est dolorem quia aut dolore voluptatem. Qui consequatur itaque aut inventore molestiae et aliquid doloribus  "
  },
  {
    id:2,
    name:"Michael Scott",
    photo:"/michael.avif",
    heading:"by michael",
    rev:"Lorem ipsum dolor sit amet. Et assumenda iure non aspernatur necessitatibus a nihil accusamus ut fuga molestias? Et amet veniam est sint sint ut modi odio 33 corporis iusto. Id repellat aliquid ut voluptatem sint est ipsa exercitationem. Aut placeat consequuntur ad itaque voluptatem est sequi rerum ea aliquid unde. Eum dignissimos nesciunt ut alias galisum et dolor possimus! Et voluptatum explicabo qui ducimus fugiat ut quos omnis et fugit voluptatem. "
  },
  {
    id:3,
    name:"James Halpert",
    photo:"/jim.jpeg",
    heading:"by jim",
    rev:"Lorem ipsum dolor sit amet. Aut maiores voluptas in galisum alias in eligendi velit cum consequatur temporibus ad tempora eius. Aut omnis doloremque sed omnis rerum aut iure dolorem. Et adipisci totam quo dicta maxime et numquam modi ut reprehenderit cupiditate. Qui porro quaerat ut alias porro et dolorem aspernatur ut molestiae repellat sed illum quisquam ut suscipit voluptatem et numquam aperiam? Ad vero nemo quo beatae asperiores et iusto sapien"
  }
];

const Reviews = () => {
  

  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  const handleClick = (review) => {
    setSelectedReview(review);
  };
  return (
    <>
    <div className='h-[650px] md:h-[780px] m-0 pt-14 '>
        <div className='m-[3rem]'>
        <div className='text-center text-4xl md:text-5xl'> <b>Our Satisfied Clients</b></div>
        <div className='text-center mt-5 text-[#808080] text-xl md:text-2xl'>we are dedicated to providing an unparalleled experience for our guests.</div>
        </div>
        <div className='flex md:mx-10 my-[3rem]  '>
            <div className=' w-1/2 md:ml-[10rem] mt-5 ml-2'  >
            {reviews.map(item=>(
              <div key={item.id} onClick={() => handleClick(item)} className='h-[3rem] w-[10rem] md:h-[6.5rem]  md:w-[25rem] flex bg-gray-200 mb-6 md:mb-10 rounded-full hover:border-black hover:border-2'>
              <div className=' rounded-full md:w-[5rem] md:h-[5rem] h-[3rem] w-[3rem]  md:ml-5 md:mt-3 '><img height={100}  width={100} alt="Dummy Image" className="rounded-full aspect-square object-cover" src={item.photo}/></div>
              <div className='md:ml-10 md:text-xl md:mt-7 ml-2 text-xs mt-4'><b>{item.name}</b></div>
          </div>
            ))}
        
            </div>
            {selectedReview && (
              <div className='w-1/2  '>
              <div className='text-xl md:text-2xl mb-3 md:mb-[2rem] '><b>{selectedReview.heading}</b></div>
              <div className='text-[#808080] md:text-xl text-xs md:leading-normal md:mr-[3rem]'>{selectedReview.rev}</div>
          </div>
            )}
            
        </div>
    </div>
    </>
  )
}

export default Reviews