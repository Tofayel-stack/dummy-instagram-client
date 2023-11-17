import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextElements";
import { toast } from "react-hot-toast";
import SmallSpinner from "../../components/SmallSpinner";

const SignUp = () => {

    const {userRegister,updatesUserInfo,loading,setLoading} = useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
  



// here 3 kind of task will be process ==> 1. imgBB  2. firebase 3.MongoDB

const handleSignUp = (data) => {
    const {userName,email,userType,userPhoto,password}=data;
    setLoading(true)

      // upload the user image to imagBB to get the url for DATABASE
    
        const apiKey = 'b1668bca15c70ef4cb7797c42ee66610'
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        const formData = new FormData();
        formData.append('image', userPhoto[0] );
  
        fetch(url, {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(result => {

            if(result.success){
                const uploadedPhotoURL = result.data.url;
                // Sign up with firebase and save data to Database (by call this function )
                registerAndSaveUser(userName,email,password,userType,uploadedPhotoURL)
                toast.success('photo uploaded')

            } 
          })
          .catch(error => {
            console.error('Error:', error)
            toast.error('something error in img upload fun')
          });
    
}



//firebase all function 
const registerAndSaveUser = (userName,email,password,userType,uploadedPhotoURL) =>{

    
        userRegister(email, password)
        .then(result => {
            const user = result?.user;
                if(user){
                    updatesUserInfo(userName) //update name in firebase
                    toast.success('user registered')

                    // call MongoDB function
                    const userData = {userName,email,userType,uploadedPhotoURL}
                    saveUserData(userData)


                        // get a jwt token in the time of user login . when firebase say user is authentic . thn we want a jwt for this user

                        fetch('',{
                            method:'POST',
                            headers:{
                            'content-type':'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            // local storage is the easiest but not the best place for store the token . more safe is https coockies .
                            localStorage.setItem('token' , data.token)
                        })
                    
                }
           
        })
        .catch(err => {
            toast.error(err.message)
        })
}

    // user Data save to database 
    const saveUserData=(userData)=>{
        const url = 'https://dummy-instagram-server.vercel.app/createUser';
        fetch(url,{
            method:'post',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(userData)
            
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            reset()
            toast.success("Save data in Database Successfully")
            navigate('/')

        })
        .catch(error=>{
            toast.error(error.message)
        })
    }






    return (
       <div className="bg-[url('https://e0.pxfuel.com/wallpapers/359/31/desktop-wallpaper-best-graphy-and-dark-city-aesthetic.jpg')] bg-no-repeat bg-cover h-screen pattern">
         <div className='container px-6 py-6 mx-auto'>
            <div className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-700 text-gray-100">
                <h1 className="text-2xl font-bold text-center">SignUp First</h1>
                <form onSubmit={handleSubmit(handleSignUp)}  className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Username</label>
                        <input type="text" {...register('userName',{required:'required'})} placeholder="Username" className="w-full px-4 py-3 rounded-md bg-gray-600 text-gray-100 border-violet-400" />
                        {errors?.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Email</label>
                        <input type="email" {...register('email',{required:'required'})} placeholder="Email" className="w-full px-4 py-3 rounded-md  bg-gray-600 text-gray-100 border-violet-400" />
                        {errors?.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Upload your photo</label>
                        <input type="file" {...register('userPhoto',{required:'required'})} className="file-input file-input-ghost w-full px-4 rounded-md  bg-gray-600 text-gray-400 border-violet-400" />
                        {errors?.userPhoto && <p className="text-red-600">{errors.userPhoto?.message}</p>}
                    </div>
                   

                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-400">Password</label>
                        <input type="password" 
                        {...register('password',{
                            required:'required', 
                           
                            minLength: {
                                value: 6,
                                message: "password must be 6 characters"
                            }
                        })} 

                        placeholder="Password" className="w-full px-4 py-3 rounded-md bg-gray-600 text-gray-100 border-violet-400" />
                        {errors?.password && <p className="text-red-600">{errors.password?.message}</p>}

                       
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white bg-red-800">
                        {
                        loading? <SmallSpinner></SmallSpinner> : 'SignUp'
                        }
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
               
                <p className="text-xs text-center sm:px-6 text-gray-400">All Ready have an account?
                    <Link to='/signIn' className="underline text-gray-100">Sign In</Link>
                </p>
            </div>
        </div>
       </div>
    );
};

export default SignUp;