import React from 'react';
import CoverSEction from '../Components/CoverSection/CoverSEction';

import TitleSEction from '../Components/TitleSection/TitleSEction';
import useData from '../CustomHook/useData';
import SingleLineCard from '../Components/Card/SingleProductLine/SingleLineCard';

// image 
import img1 from '../assets/menu/banner3.jpg'
import img2 from '../assets/home/chef-service.jpg'



const OurMenu = () => {

    const [data, loading] = useData()

    const populars = data.filter(popularRecepi => popularRecepi.category === 'popular')
    const desserts = data.filter(popularRecepi => popularRecepi.category === 'dessert')
    const pizzas = data.filter(popularRecepi => popularRecepi.category === 'pizza')
    const salads = data.filter(popularRecepi => popularRecepi.category === 'salad')
    const soups = data.filter(popularRecepi => popularRecepi.category === 'soup')

    return (
        <div>
            <CoverSEction BgCoverPic={img1} title={'Our Menu'} description={'Would you like to try a dish?'}></CoverSEction>

            <TitleSEction subTitle={'---Dont miss---'} title={'TODAYs OFFER'}></TitleSEction>
            <div className='grid grid-cols-2 gap-5 container mx-auto '>
                {
                    populars.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                }
                
            </div>
            <div className="card-actions flex  justify-center">
                    <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
                </div>

            {/* 2 */}

            <div className='mt-28'>
                <CoverSEction BgCoverPic={img2} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></CoverSEction>
                <div className='grid grid-cols-2 gap-5 container mx-auto  mt-20 mb-20'>
                    {
                        desserts.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                    }
                    
                </div>
                <div className="card-actions flex justify-center">
                        <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
                    </div>

            </div>


            {/* 3 */}
            <div className='mt-28'>
                <CoverSEction BgCoverPic={img2} title={'pizza'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></CoverSEction>
                <div className='grid grid-cols-2 gap-5 container mx-auto  mt-20 mb-20'>
                    {
                        pizzas.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                    }
                    <div className="card-actions flex justify-center">
                        <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
                    </div>
                </div>

            </div>
            {/* 4 */}

            <div className='mt-28'>
                <CoverSEction BgCoverPic={img2} title={'SALAD'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></CoverSEction>
                <div className='grid grid-cols-2 gap-5 container mx-auto  mt-20 mb-20'>
                    {
                        salads.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                    }
                    
                </div>
                <div className="card-actions flex justify-center">
                        <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
                    </div>

            </div>
            {/* 5 */}

            <div className='mt-28'>
                <CoverSEction BgCoverPic={img2} title={'SOUPS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></CoverSEction>
                <div className='grid grid-cols-2 gap-5 container mx-auto  mt-20 mb-20'>
                    {
                        soups.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                    }
                    
                </div>
                <div className="card-actions flex justify-center">
                        <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
                    </div>

            </div>

        </div>
    );
};

export default OurMenu;