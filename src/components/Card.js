import React from 'react'

const Card = ({item, theme}) => {
    
  return (
    <div className='card-wrapper'>
        <div className='card flex mx-auto gap-4 sm:gap-8 max-w-none min-w-fit md:max-w-xl p-1 rounded shadow-gray-300 shadow-sm hover:shadow-gray-600 hover:shadow-lg'>
            <img src={item.image_url}
                className='card-img md:basis-[40%] w-[100px] h-[150px] sm:w-[150px] sm:h-[200px] rounded my-auto'
            />
            <div className='card-details flex flex-col gap-2 md:basis-[60%]'>
                <div className='location-row flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src="images/location.png"/>
                        <p className='location text-[11px] sm:text-[11px] font-[400]'>
                            {item.location}
                        </p>
                    </div>
                    <a href={item.google_map} 
                    className='map-link text-[#918E9B] underline text-[11px] sm:text-auto'>
                        View on Google Maps
                    </a>
                </div>
                <p className={theme ?'journal-title text-[#2B283A] sm:text-[25px] font-[700] mb-1 sm:mb-4' : 'text-gray-300 sm:text-[25px] font-[700] mb-1 sm:mb-4'}>
                    {item.title}
                </p>
                <div className='date text-[11px] sm:text-[11px] font-[700]'>
                    <span>{item.start_date}</span> - <span>{item.end_date}</span>
                </div>
                <p className='description text-[10px] sm:text-[12px] font-[400]'>
                    {item.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card