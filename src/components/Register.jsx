import React from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const Register = () => {
  const handleForm = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Creating User
      const res = await createUserWithEmailAndPassword(auth, email, password);
    
      // Uploading Image FIle
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (err)=>{
            console.log(err)
        },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{

                await updateProfile(res.user , {
                    displayName,
                    photoURL: downloadURL,
                })

            });

        }
        
        )
        
        
        console.log(res.user)

    } catch (error) {
      const err = error.message;
      toast.error(err);
    }
  };

  return (
    <div className="text-white grid place-items-center h-screen">
      <form
        onSubmit={handleForm}
        className="registerBox w-96 p-6 bg-neutral-800 flex flex-col gap-5 rounded-lg shadow-2xl"
      >
        <span className="text-center text-xl">Register</span>

        <input
          type="text"
          placeholder="Enter Name"
          className="p-3 rounded-md px-4 border-transparent border focus:border-yellow-300"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="p-3 rounded-md px-4 border-transparent border focus:border-yellow-300"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-3 rounded-md px-4 border-transparent border focus:border-yellow-300"
        />

        <label
          htmlFor="file"
          className="flex items-center gap-2 cursor-pointer w-min pl-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <span className=" whitespace-nowrap">Upload Avtar</span>
        </label>
        <input hidden id="file" type="file" />

        <button type="submit" className="bg-yellow-600 p-2 rounded-md m-2">
          Register
        </button>

        <div className="text-center hover:underline cursor-pointer text-sm">
          Your already have account ? Click here
        </div>
      </form>
    </div>
  );
};

export default Register;
