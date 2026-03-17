import starIcon from '../assets/star.svg'

const HeaderTestimonial = ({text, starsCount}) => {
  const numberOfStars = Array.from({ length: starsCount });
  return (
      <div className='flex flex-col gap2 justify-center items-center w-fit'>
          <div id="stars" className='flex gap-2 group'>
              {numberOfStars.map((_, index) => (
                  <img className='w-4 h-4 lg:w-6 lg:h-6 group-hover:animate-spin' key={index} src={starIcon} alt='Star icon' />
              ))}
          </div>
          <p className='font-fancy text-gray-400 text-lg lg:text-xl lg:font-semibold' >"{text}"</p>
      </div>
  );
}

export default HeaderTestimonial