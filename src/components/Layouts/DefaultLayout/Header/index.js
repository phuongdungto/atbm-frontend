import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom'
import './header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState, useRef, useEffect } from 'react';
import cookies from 'react-cookies';
// import { userLogout } from '~/store/action/userAction';
// import validator from 'validator';
// import { ChangePasswordUserService } from '~/service/userService';
// import { handelNotify } from '~/core/utils/req';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    // const navigate = useNavigate();
    // const handleOnclickLogin = () => {
    //     navigate('/login');
    // }

    // const wrapperRef = useRef();
    // const [isOpen, setisOpen] = useState(false);
    // const showBox = () => {
    //     setisOpen(!isOpen);
    // }
    // const handleOnclickLogout = () => {
    //     cookies.remove("Token")
    //     cookies.remove("user")
    //     cookies.remove("hasPassword")
    //     dispatch(userLogout());
    //     navigate('/Home');
    // }
    // const [show, setShow] = useState(false);
    // const [validate, setValidate] = useState('')
    // const handleClose = () => setShow(false);
    // const handleShow = () => {
    //     setChange({
    //         currentPassword: "",
    //         newPassword: ""
    //     })
    //     setConfirmPass({
    //         repass: "",
    //     })
    //     setValidate('')
    //     setShow(true)
    // }

    // const handleOnclickProfile = () => {
    //     navigate('/Profile');
    // }
    // const handleOnclickHistory = () => {
    //     navigate('/history');
    // }
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
    //             setisOpen(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside)
    //     };
    // }, []);

    // let path = <Button onClick={handleOnclickLogin} className='col-7 col-xl-4 btn btn-warning btn-sm my-1'>Đăng Nhập</Button>;
    // if (user) {
    //     let name = "";
    //     let arrName = user.fullname.split(' ');
    //     if (arrName.length < 1) {
    //         name = user.fullname
    //     } else {
    //         name += arrName[arrName.length - 1];
    //     }
    //     path = (<div onClick={() => showBox()} ref={wrapperRef}
    //         className='col-7 col-xl-3 profile-box btn btn-sm btn-warning my-1'>{name}
    //         <div className={isOpen === true ? 'box-profile-body' : "box-profile-body box-hiden-profile"}>
    //             <div className='box-content-profile'>
    //                 <div className='box-profile-list'>
    //                     <div className='box-profile-item' onClick={handleOnclickProfile}>Thông tin tài khoản</div>
    //                     <div className='box-profile-item' onClick={handleOnclickHistory}>
    //                         Lịch sử đơn hàng
    //                     </div>
    //                     <div className='box-profile-item' onClick={handleShow}>
    //                         Đổi mật khẩu
    //                     </div>
    //                     <div />
    //                     <div className='box-profile-item' onClick={handleOnclickLogout}>Đăng xuất</div>
    //                 </div>
    //             </div>
    //             <div className="profile-triangle"></div>
    //         </div>
    //     </div>)
    // }
    // const [change, setChange] = useState({
    //     currentPassword: "",
    //     newPassword: ""
    // });
    // const [confirmPass, setConfirmPass] = useState({
    //     repass: "",
    // })

    // const handleChangePassword = e => {
    //     const value = e.target.value;
    //     setChange({
    //         ...change,
    //         [e.target.name]: value
    //     });
    // }
    // const RePassword = e => {
    //     const value = e.target.value;
    //     setConfirmPass({
    //         ...confirmPass,
    //         [e.target.name]: value
    //     });
    // }
    // const handeClickChangePassword = async (e) => {
    //     e.preventDefault();
    //     const isValid = validateAll()
    //     if (!isValid) return
    //     try {
    //         let token = cookies.load('Token');
    //         await ChangePasswordUserService(change, token);
    //         setShow(false)
    //         handelNotify('success', 'Đổi mật khẩu thành công')

    //     } catch (e) {
    //         if (e.response && e.response.data.error) {
    //             handelNotify('error', 'Mật khẩu hiện tại không đúng')
    //         }
    //     }

    // }
    // const validateAll = () => {
    //     const msg = {}
    //     if (validator.isEmpty(change.currentPassword)) {
    //         msg.passwordcCurrent = "Vui lòng nhập mật khẩu hiện tại của bạn"
    //     } else {
    //         if (change.currentPassword < 8) {
    //             msg.passwordcCurrent = '"Độ dài ít nhất 8 ký tự'
    //         }
    //     }

    //     if (validator.isEmpty(change.newPassword)) {
    //         msg.passwordNew = "Vui lòng nhập mật khẩu mới của bạn"
    //     }
    //     else {
    //         if (change.newPassword < 8) {
    //             msg.passwordNew = '"Độ dài ít nhất 8 ký tự'
    //         }
    //     }
    //     if (validator.isEmpty(confirmPass.repass)) {
    //         msg.passwordConfirm = "Vui lòng nhập xác nhận mật khẩu"
    //     } else {
    //         if (confirmPass.repass !== change.newPassword) {
    //             msg.passwordConfirm = "Xác nhận mật khẩu không chính xác"
    //         }
    //     }
    //     setValidate(msg)
    //     if (Object.keys(msg).length > 0) return false
    //     return true
    // }

    return (
        <>
            {/* <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
            <div>
                <div className='header-topbar row' >

                    <div className='header-topbar-content col-12 offset-0 col-xl-4 offset-xl-4'>
                        <NavLink to="/Home" style={{ textDecoration: 'none', color: 'yellow' }}>
                            <pre>

                                G O L D    D U C K    B O L G

                            </pre>
                        </NavLink>
                    </div>

                    <div className='col-4 col-xl-3'>
                        <div className='row'>

                            <div className='col-1'></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header;