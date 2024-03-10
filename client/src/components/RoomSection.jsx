import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import myContext from '../context/myContext';

const RoomSection = () => {
    const { roomNo, sectionName } = useParams();
    const { fetchRoomInfo } = useContext(myContext);
    const [data, setData] = useState({
        date: '10 Mar 2024',
        livingRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            telephone: '-',
            'Coffee Maker': '-',
            fridge: '-',
            Water: '-',
            'Menu Card': '-',
        },
        dinningRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            Plates: '-',
            Glasses: '-',
            Napkin: '-',
        },
        washRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            Towels: '-',
            Soap: '-',
            'Hair Dryer': '-',
            'Hot Water': '-',
        },
        bedRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            'Bed Sheet': '-',
            'Pillows': '-',
        }
    });
    const fetchData = async () => {
        let currData = await fetchRoomInfo(roomNo,sectionName);
        console.log(currData);
        if (currData !== -1)
            setData(currData);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='gradient pt-8 p-4 h-[92vh] text-4xl'>
            <div className='h-[80%] flex justify-around items-center'>
                <div className="flex">
                    <div className="1stcol flex flex-col justify-center items-center border-2 border-solid border-black pb-4">
                        <div className="head border-b-2 border-solid border-b-black w-80 text-center py-4 mb-2">Object</div>
                        {Object.keys(data[sectionName]).map((key, ind) => {
                            if (key == 'link') return "";
                            return (
                                <div key={ind} className="">{key}</div>
                            )
                        })}
                    </div>
                    <div className="2ndcol flex flex-col justify-center items-center border-2 border-solid border-black border-l-0 pb-4">
                        <div className="head border-b-2 border-solid border-b-black w-80 text-center py-4 mb-2">Object Info</div>
                        {data[sectionName] ? Object.keys(data[sectionName]).map((key, ind) => {
                            if (key == 'link') return "";
                            return (
                                <div key={ind} className="">{data[sectionName][key] >= 1 ? data[sectionName][key] == 1 ? "Present" : data[sectionName][key] :data[sectionName][key]=='-'?'-': "Not Present"}</div>
                            )
                        }) : "Data Not Uploaded Yet"}
                    </div>
                </div>
                <img src={data[sectionName].link} alt="Image Not Uploaded" className='h-[60vh]' />
            </div>
        </div>
    )
}

export default RoomSection

/*
{
        date: '10 Mar 2024',
        livingRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            telephone: 1,
            'Coffee Maker': 1,
            fridge: 1,
            Water: 0,
            'Menu Card': 1,
        },
        dinningRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            Plates: 1,
            Glasses: 1,
            Napkin: 1,
        },
        washRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            Towels: 1,
            Soap: 1,
            'Hair Dryer': 1,
            'Hot Water': 1,
        },
        bedRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            'Bed Sheet': 0,
            'Pillows': 4
        }
    }
*/
/*
{
        date: '10 Mar 2024',
        livingRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            telephone: '-',
            'Coffee Maker': '-',
            fridge: '-',
            Water: '-',
            'Menu Card': '-',
        },
        dinningRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            Plates: '-',
            Glasses: '-',
            Napkin: '-',
        },
        washRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            Towels: '-',
            Soap: '-',
            'Hair Dryer': '-',
            'Hot Water': '-',
        },
        bedRoom: {
            link: 'https://res.cloudinary.com/dstefsngu/image/upload/v1709978512/DINING_ROOM.jpg',
            'Bed Sheet': '-',
            'Pillows': '-',
        }
    }
*/