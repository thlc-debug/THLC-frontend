import Image from 'next/image';
import Link from 'next/link';

const HotelCard = ({ imageSrc, location, name, description, reverse, by, id }) => {
  return (
    <div className={`flex flex-col lg:gap-[80px] lg:flex-row items-center md:items-start  border-gray-300 p-4  mb-4 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <Image
          src={imageSrc}
          alt={name}
          width={450}
          height={300}
          className={`border border-gray-300 p-2 ${reverse ? 'rounded-r-full' : 'rounded-l-full'}`}
        />
      </div>
      <div className={`md:ml-4 text-center md:text-left justify-center  md:mt-10 ${reverse ? 'md:mr-4' : ''}`}>
        <div className="md:text-4xl mb-2 text-3xl font-bold">{name}</div>
        <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">{location}</span>
        <p className="mt-2 text-gray-700 text-md">{description}</p>
        <p className="mt-2 text-md italic text-gray-500">`Trusted by {by}+ customers`</p>
        <a href={`/hoteldetail?id=${id}`} className="mt-2 text-blue-600 font-semibold">See more</a>
      </div>
    </div>
  );
};

const LuxuryChains = () => {
  return (
    <div className="container mx-auto p-12 mt-14">
      <HotelCard
        imageSrc="/hotel-img3.jpeg"
        location="Thailand"
        name="Anantara "
        description="Anantara Hotels, Resorts & Spas is a luxury hotel brand headquartered in Bangkok, Thailand, with properties in Asia, the Middle East, Africa, and Europe.."
        reverse={false}
        by="700"
        id="667e918aa4ea42e2f06c560d"
      />
      <HotelCard
        imageSrc="/y2.png"
        location="Italy"
        name="Baglioni"
        description="Baglioni Hotels & Resorts is an Italian luxury hotel chain with properties in Italy, France, the UK, and the Maldives..."
        reverse={true}
        by="500"
        id="667e91cfa4ea42e2f06c5613"
      />
      <div className="text-center mt-8">
        <Link href="/luxury-chains" className="bg-black text-white py-2 px-4 rounded-lg">View all chains</Link>
      </div>
    </div>
  );
};

export default LuxuryChains;
