import { useContext, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContextElements";
import { useForm } from "react-hook-form";
import SmallSpinner from "../../components/SmallSpinner";

const CreatePost = () => {

    // drag and drop
    const fileTypes = ["JPEG","JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (photo) => {
    setFile(photo);
    };
    //...

    const {user}= useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [buttonLoading,setButtonLoading]=useState(false)

    const handleAddPost = (data) =>{
        setButtonLoading(true)

        const {caption,location} = data

     

            // upload the user image to imagBB to get the url for DATABASE
    
            const apiKey = 'b1668bca15c70ef4cb7797c42ee66610'
            const imgBBurl = `https://api.imgbb.com/1/upload?key=${apiKey}`
            const formData = new FormData();
            formData.append('image', file);
      
            fetch(imgBBurl , {
              method: 'POST',
              body: formData
            })
              .then(res => res.json())
              .then(result => {
    
                if(result.success){
                    const uploadedPhotoURL = result.data.url;
                    //  save data to Database (by call this function )
                    const postData = {
                        username: user.email,
                        caption,
                        image: uploadedPhotoURL,
                        location,
                        likes:100
                        
                    }

                    console.log(postData);
                    productDataSave(postData)
    
                } 
              })
              .catch(error => {
                // console.error('Error:', error)
                toast.error('something error in img upload')
              });

 }



        const productDataSave =(postData)=>{
                           
            // user Data save to database 
            
                const url = 'https://dummy-instagram-server.vercel.app/create-post';
                fetch(url,{
                    method:'post',
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(postData)
                    
                })
                .then(res => res.json())
                .then(result => {
                    if(result.data.acknowledged){
                            // console.log(result)
                            toast.success('post created')
                            reset()
                            setButtonLoading(false)
                    }
                })
                .catch(error=>{
                    // console.error(error)
                    toast.error(error.message)
                })
            
        }
            


        

    return (
       
          

        <section className="relative lg:h-screen bg-zinc-100">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16  lg:px-8 lg:py-32">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Create your Post</h1>
            </div>


{/* add product input form */}
            <form onSubmit={handleSubmit(handleAddPost)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                      

                            <div className="relative">
                                <p className="text-blue-500 text-sm">Caption</p>
                            <input
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("caption", { required: true })}
                                placeholder="write caption"
                                type="text"
                            />
                            {errors.caption && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>


                            <div className="relative">
                                <p className="text-blue-500 text-sm">Location</p>
                            <input
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                {...register("location", { required: true })}
                                placeholder="location Name"
                                type="text"
                            />
                            {errors.location && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>


                            <div className="relative">
                                {/*drag and drop form react dnd */}
                            <FileUploader
                                    handleChange={handleChange}
                                    name="photo"
                                    types={fileTypes}
                                    required
                                />
                            <p className="text-red-300">{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                            </div>


                            <button className="block w-full p-3 text-center rounded-sm text-white bg-amber-700">
                            {
                                  buttonLoading? <SmallSpinner></SmallSpinner> : 'Create'
                            }
                        </button>


                      


                        </form>
                    
        </div>

      
        </section>
       
    );
};

export default CreatePost;