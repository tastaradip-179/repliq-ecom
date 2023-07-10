import React, {useState, useEffect} from 'react'
import '../../firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BiLogoGmail, BiSolidHome } from 'react-icons/bi'

const Landing = () => {
    //Signup/Register States
    let [usernameR, setUsernameR] = useState("");
    let [emailR, setEmailR] = useState("");
    let [passwordR, setPasswordR] = useState("");
    let [cpasswordR, setCpasswordR] = useState("");
    let [phone, setPhone] = useState("");
    let [loadingR, setLoadingR] = useState(false);
    let [errorMessageR, setErrorMessageR] = useState("");
    let [successMessageR, setSuccessMessageR] = useState("");  


    //Signin/Login States
    let [emailL, setEmailL] = useState("");
    let [passwordL, setPasswordL] = useState("");
    let [errorMessageL, setErrorMessageL] = useState("");
    let [loadingL, setLoadingL] = useState(false);

    //right panel
    let [rightPanelActive, setRightPanelActive] = useState(false)
    let handleRightPanel = () => {
        console.log(!rightPanelActive);
        setRightPanelActive(!rightPanelActive);
    }


    //auth
    const auth = getAuth();

    //navigation
    let navigate = useNavigate();  

    //handle Register
    let handleSignupSubmit = (e) => {
        e.preventDefault();
        setLoadingR(true);
        createUserWithEmailAndPassword(auth, emailR, passwordR)
        .then((user) => {
            updateProfile(auth.currentUser, {
                displayName: usernameR, 
                photoURL: "https://webiconspng.com/wp-content/uploads/2017/01/Computer-Users-Icon-PNG.png"
            }).then(() => {
                const db = getDatabase();
                set(ref(db, 'users/'+user.user.uid), {
                    id: user.user.uid,
                    username: usernameR,
                    email: emailR,
                    phone: phone,
                    dp: user.user.photoURL,
                    createdAt: Date()
                }); 
                setErrorMessageR("");
                setSuccessMessageR("Account created successfully!!!");
                setLoadingR(false);
                setErrorMessageL("");
            }).catch((error) => {
                console.log(error);
            });
        })
        .catch((error) => {
            setLoadingR(false);
            const errorCode = error.code;
            setSuccessMessageR("");
            if(error.message.includes("Firebase: ")){
                let errmsg = error.message.replace("Firebase: ","");
                if(errmsg.includes("Error ")){
                    let errmsg2 = errmsg.replace("Error ","");
                    setErrorMessageR(errmsg2);
                }
                else{
                    setErrorMessageR(errmsg);
                }
            }
            else{
                setErrorMessageR(error.message);
            } 
            if(passwordR != cpasswordR){
                setErrorMessageR("Confirmation Password is not matched");
            }
        });
    }


    //handle Login
    let handleSigninSubmit = (e) => {
        e.preventDefault();
        setLoadingL(true);
        signInWithEmailAndPassword(auth, emailL, passwordL)
        .then((userCredential) => {
            const user = userCredential.user;
            setErrorMessageL("");
            navigate('/home');
        })
        .catch((error) => {
            const errorCode = error.code;
            setLoadingL(false);
            if(error.message.includes("Firebase: ")){
                let errmsg = error.message.replace("Firebase: ","");
                if(errmsg.includes("Error ")){
                    let errmsg2 = errmsg.replace("Error ","");
                    setErrorMessageL(errmsg2);
                }
                else{
                    setErrorMessageL(errmsg);
                }
            }
            else{
                setErrorMessageL(error.message);
            } 
        });
    }

    return (
    <>
        <div className='bg-[#f6f5f7] flex justify-center items-center flex-col h-screen mx-auto relative'> 
            <div className='absolute top-10 right-10'>
                <Link to="/home" className='text-xl text-black hover:text-[#1a99a1]'>
                    <BiSolidHome/>
                </Link>
            </div>
            <div className='container'>
            {errorMessageL
                ?
                <div className='bg-red-500 text-white rounded-[10px] relative overflow-hidden w-[768px] max-w-[100%] text-center p-5 shadow-neutral-500 mx-auto mb-5'>
                    {errorMessageL}
                </div>    
                : 
                ""
            }
            {errorMessageR
                ?
                <div className='bg-red-500 text-white rounded-[10px] relative overflow-hidden w-[768px] max-w-[100%] text-center p-5 shadow-neutral-500 mx-auto mb-5'>
                    {errorMessageR}
                </div>    
                : 
                ""
            }
            {successMessageR
                ?
                <div className='bg-green-500 text-white rounded-[10px] relative overflow-hidden w-[768px] max-w-[100%] text-center p-5 shadow-neutral-500 mx-auto mb-5'>
                    {successMessageR}
                </div>    
                : 
                ""
            }
                <div className='bg-white rounded-[10px] relative overflow-hidden w-[768px] max-w-[100%] min-h-[580px] shadow-neutral-500 mx-auto'>
                    <div className={rightPanelActive
                    ?
                    'absolute top-0 left-0 w-[50%] h-full transition-all duration-150 ease-in-out opacity-1 z-50 translate-x-[100%]'
                    :
                    'absolute top-0 left-0 w-[50%] opacity-0 z-10 h-full transition-all duration-150 ease-in-out'
                    }
                    >
                        <form className='bg-white flex items-center justify-center flex-col px-[50px] h-full text-center'>
                            <h1 className='font-bold m-0'>Create Account</h1>
                            <div className='my-5'>
                                <a href="#" className='text-[#333] text-base my-[15px] no-underline border border-[#DDDDDD] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]'>
                                    <FaFacebookF/>
                                </a>
                                <a href="#" className='text-[#333] text-base my-[15px] no-underline border border-[#DDDDDD] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]'>
                                    <BiLogoGmail/>
                                </a>
                                <a href="#" className='text-[#333] text-base my-[15px] no-underline border border-[#DDDDDD] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]'>
                                    <FaLinkedinIn/>
                                </a>
                            </div>
                            <span className='text-sm'>or use your email for registration</span>
                            <input type="text" placeholder="Username" onChange={(e)=>setUsernameR(e.target.value)}
                                className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'/>
                            <input type="email" placeholder="Email" onChange={(e)=>setEmailR(e.target.value)}
                                className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'/>
                            <PhoneInput className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'
                                placeholder="Phone No"
                                value={phone}
                                onChange={setPhone}/>
                            <input type="password" placeholder="Password" onChange={(e)=>setPasswordR(e.target.value)}
                                 className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'/>
                            <input type="password" placeholder="Confirm Password" onChange={(e)=>setCpasswordR(e.target.value)}
                                 className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'/>
                            {loadingR
                            ?
                                <div
                                class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                                role="status">
                                <span
                                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span
                                >
                                </div>
                            :
                                <button  className='rounded-[20px] border border-[#1a99a1] bg-[#1a99a1] text-white text-md font-bold px-6 py-4 uppercase text-transform: uppercase;
	                                transition-transform ease-in-out delay-150 active:scale-105 active:bg-[#0dad77] hover:scale-105 hover:bg-[#0dad77] duration-300 focus:outline-none'
                                    onClick={handleSignupSubmit}>
                                    Sign Up
                                </button>
                            }
                        </form>    
                    </div>

                    <div className={rightPanelActive
                    ?
                    'absolute top-0 left-0 w-[50%] z-10 opacity-0 h-full transition-all duration-150 ease-in-out translate-x-[100%]'
                    :
                    'absolute top-0 left-0 w-[50%] z-50 opacity-1 h-full transition-all duration-150 ease-in-out'
                    }
                    >
                        <form className='bg-white flex items-center justify-center flex-col px-[50px] h-full text-center'>
                            <h1 className='font-bold m-0'>Sign in</h1>
                            <div className='my-5'>
                                <a href="#" className='text-[#333] text-base my-[15px] no-underline border border-[#DDDDDD] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]'>
                                    <FaFacebookF/>
                                </a>
                                <a href="#" className='text-[#333] text-base my-[15px] no-underline border border-[#DDDDDD] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]'>
                                    <BiLogoGmail/>
                                </a>
                                <a href="#" className='text-[#333] text-base my-[15px] no-underline border border-[#DDDDDD] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]'>
                                    <FaLinkedinIn/>
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" onChange={(e)=>setEmailL(e.target.value)}
                                className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'/>
                            <input type="password" placeholder="Password" onChange={(e)=>setPasswordL(e.target.value)}
                                className='bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-full'/>
                            <a href="#" className='text-[#333] text-base my-[15px] no-underline'>Forgot your password?</a>
                            <button className='rounded-[20px] border border-[#1a99a1] bg-[#1a99a1] text-white text-md font-bold px-6 py-4 uppercase text-transform: uppercase;
	                            transition-transform ease-in-out delay-150 active:scale-105 active:bg-[#0dad77] hover:scale-105 hover:bg-[#0dad77] duration-300 focus:outline-none'
                                onClick={handleSigninSubmit}>
                                    Sign In
                            </button>
                        </form>
                    </div>
                    <div className={rightPanelActive
                        ?
                        'absolute top-0 left-[50%] w-[50%] h-full overflow-hidden transition-transform duration-200 ease-in-out z-10 translate-x-[-100%]'
                        :
                        'absolute top-0 left-[50%] w-[50%] h-full overflow-hidden transition-transform duration-200 ease-in-out z-50'
                        }   
                    >
                        <div className={rightPanelActive
                        ?
                        'bg-[#FF416C] text-white relative left-[-100%] h-full w-[200%] translate-x-0 transition-transform duration-200 ease-in-out bg-cover bg-no-repeat bg-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-10 translate-x-[50%]'
                        :
                        'bg-[#FF416C] text-white relative left-[-100%] h-full w-[200%] translate-x-0 transition-transform duration-200 ease-in-out bg-cover bg-no-repeat bg-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% z-50'
                        }
                        >
                            <div className='absolute flex items-center justify-center flex-col py-[40px] text-center top-0 h-full w-[50%] translate-x-0 transition-transform duration-200 ease-in-out'>
                                <h1 className='font-bold m-0'>Welcome Back!</h1>
                                <p className='text-base font-light leading-10 mt-[20px] mb-[30px] px-10'>
                                    To keep connected with Repliq Ecoomerce, please login with your email and password
                                </p>
                                <button  className='rounded-[20px] border border-white bg-transparent text-white text-md font-bold px-6 py-4 uppercase text-transform: uppercase;
	                                transition-transform ease-in-out delay-150 active:scale-105 active:bg-[#0dad77] hover:scale-105 hover:bg-[#0dad77] duration-300 focus:outline-none'
                                    onClick={handleRightPanel}>
                                    Sign In
                                </button>
                            </div>
                            <div className='absolute flex items-center justify-center flex-col py-[40px] text-center top-0 right-0 h-full w-[50%] translate-x-0 transition-transform duration-200 ease-in-out'>
                                <h1 className='font-bold m-0'>Hello, Admin!</h1>
                                <p className='text-base font-light leading-10 mt-[20px] mb-[30px] px-10'>
                                    Enter your personal details and start journey with Repliq Ecommerce
                                </p>
                                <button  className='rounded-[20px] border border-white bg-transparent text-white text-md font-bold px-6 py-4 uppercase text-transform: uppercase;
	                                transition-transform ease-in-out delay-150 active:scale-105 active:bg-[#0dad77] hover:scale-105 hover:bg-[#0dad77] duration-300 focus:outline-none'
                                    onClick={handleRightPanel}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Landing