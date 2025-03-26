import React, { useState } from 'react';
import './addIteam.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddIteam() {


    const [focus, setFocus] = useState({
        'errName': false,
        'errPrice': false,
        'errCategory': false,
        'errDescription': false
    })

    const [inputs, setInputs] = useState({
        'name': '',
        'price': '',
        'category': '',
        'description': ''
    });

    const navigate = useNavigate();


    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(inputs);

        try {
            // console.log('hhhhhhhhhhh');
            console.log(inputs);
            const res = await axios.post(`http://localhost:1700/addIteam`, inputs, {
                //http://localhost:1700/addIteam
                withCredentials: true
            });
            console.log(res);
            if (res.data.success) {
                navigate('/');
                // localStorage.setItem('token' , res.data.token) ;
                //toast.success(res.data.message);
                console.log(res.data.message);
            }

        } catch (error) {
            console.log(error.response);
            toast.error(error.response.data.message);
        }


    }

  return (
    <div className='singup-restaurent'>
            <Container>
                <form className='singup-list' onSubmit={onSubmit}>
                    <Row>
                        <div>
                            <Link style={{ display: 'flex', justifyContent: 'start' }} to='/'>
                                <IoArrowBackCircle style={{ width: '24px', height: '24px', color: '#fff' }} />
                            </Link>
                            <h2 className='singup-head'>Add Iteam</h2>
                            <span className='singup-mainHead'>Enter iteam details below</span>
                        </div>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Name :-</span>
                                <input type="text" placeholder='Name' className='inpuBox-singup' id='name' name='name' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} onBlur={() => setFocus({ ...focus, errName: true })} focus={focus.errName?.toString()} required />
                                <span className='error-signup'>Enter iteam name</span>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Price :-</span>
                                <input type="text" placeholder='Price' className='inpuBox-singup' id='price' name='price' value={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} onBlur={() => setFocus({ ...focus, errPrice: true })} focus={focus.errPrice?.toString()} required />
                                <span className='error-signup'>Enter iteam price</span>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Category :-</span>

                                <select id="category" name="category" className='inpuBox-singup'
                                    onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
                                    onBlur={() => setFocus({ ...focus, errCategory: true })} focus={focus.errCategory?.toString()}
                                    defaultValue={inputs.category}
                                    required>
                                    <option value='' style={{ fontSize: '13px', fontWeight: '500' }}>Select option</option>
                                    <option value='Food' style={{ fontSize: '12px', fontWeight: '500' }}>Food</option>
                                    <option value='Drinks' style={{ fontSize: '12px', fontWeight: '500' }}>Drinks</option>
                                </select>

                                <span className='error-signup'>Enter iteam category</span>
                            </div>
                        </Col>

                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Description :-</span>
                                <input type="text" placeholder='Description' className='inpuBox-singup' id='price' name='price' value={inputs.description} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} onBlur={() => setFocus({ ...focus, errDescription: true })} focus={focus.errDescription?.toString()} required />
                                <span className='error-signup'>Enter brief description </span>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div className='singupList-ButtonDiv'>
                                <button className='singupList-Button'>Add Iteam</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
  )
}

export default AddIteam
