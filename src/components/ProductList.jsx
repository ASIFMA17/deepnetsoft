import React, { useEffect, useState ,  useCallback} from 'react';
import './productList.css';
import { Link } from 'react-router-dom';

import Frame1 from '../images/Frame.png';
import Frame2 from '../images/Frame-2.png';
import IMAGE1 from '../images/image 39 (1) 1.png';
import IMAGE2 from '../images/cocktail1 1.png';
import IMAGE3 from '../images/Rectangle 107.png';
import List from './List';
import axios from 'axios';
import { toast } from 'react-toastify';

function ProductList() {

    const [data, setData] = useState([]);

    const getIteam = useCallback(async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getIteam?category=Food`, {
                withCredentials: true
            });
            if (res.data.success) {
                setData(res.data.getIteam);
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error.response);
        }
    }, []); // Empty dependency array ensures `getIteam` is only created once

    useEffect(() => {
        getIteam();
    }, [getIteam]); // No infinite loop since `getIteam` is memoized


    const getDrinks = async () => {

        try {
            // console.log('hhhhhhhhhhh');

            const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/getIteam?category=Drinks`, {
                //http://localhost:1700/getIteam?category=Drinks
                //'http://localhost:700/login'
                withCredentials: true
            });
            console.log(res);
            if (res.data.success) {
                console.log(res.data.getIteam);
                setData(res.data.getIteam);

                toast.success(res.data.message);
                console.log(res.data.message);
            }

        } catch (error) {
            console.log(error.response);
            //toast.error(error.response.data.message);
        }

        console.log(data);


    }




    return (
        <>

            <div className='img2Div'>
                <img src={IMAGE3} alt="" className='img2' />
                <div className='buttonDiv'>
                    <button onClick={(() => getIteam())} className='button'>FOOD</button>
                    <button onClick={(() => getDrinks())} className='button'>DRINKS</button>
                    <button className='button'>BRUNCH</button>
                </div>
            </div>

            <div className='totalDiv'>



                <div className='frameDiv'>
                    <img src={Frame1} alt="" className='FrameIMG' />
                </div>

                <div className='centerDiv'>

                    <div className='boxDiv'>

                        <h3 className='branchHead'> BRUNCH COCKTAILS </h3>



                        <div className='twoIteamDiv'>

                            {data && data.map((element, index) => (

                                <div key={index}>

                                    <List name={element.name} price={element.price} description={element.description} />

                                </div>

                            ))}



                        </div>


                        <div className='topImgDiv'>
                            <img src={IMAGE1} alt="" className='IMG' />
                        </div>

                        <div className='bottomImgDiv'>
                            <img src={IMAGE2} alt="" className='IMG' />
                        </div>

                        <div className='addButtonDiv'>
                            <Link className='addButton' to='/addIteam'>Add Iteam</Link>
                        </div>

                    </div>

                </div>

                <div className='frameDiv'>
                    <img src={Frame2} alt="" className='FrameIMG' />
                </div>

            </div>
        </>
    )
}

export default ProductList
