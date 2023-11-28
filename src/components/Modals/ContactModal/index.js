import { useState } from "react";

import { IoMdClose } from "react-icons/io";

const ContactModal = (props) => {
    const { isOpen, onClose, contactInfo } = props;

    const [submit,setSubmit]=useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    

    const handleSubmit=()=>{
        setSubmit(true)
        return(
            <></>
        )
    }
    return (
        <div className="fixed top-0 inset-0 z-10 overflow-y-auto">
        <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99]
     bg-gray-500 bg-opacity-75 h-screen w-screen top-0 left-0"
        >
           
           {
            !submit ? 
            ( <div className="bg-white w-[50%] h-fit relative py-2">
           <div className="my-1">
           <IoMdClose className="absolute right-0 mx-2 my-1 top-0" onClick={onClose} />
            </div>
            <div className="grid grid-cols-2 px-5 mx-2 mt-2">
                <div className="col-span-2 text-center">
                   <p> Fill the form for our attention</p>
                </div>
                <div className="col-span-1">
                    <div className="col-span-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            email: e.target.value  // Update the 'name' field in the state
                            });
                        }}
                        />
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            email: e.target.value  // Update the 'name' field in the state
                            });
                        }}
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="col-span-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            email: e.target.value  // Update the 'name' field in the state
                            });
                        }}
                        />
                    </div>
    
                </div>
                <div className="col-span-2 items-center text-center mt-2">
                    <button onClick={onClose} className="text-white bg-slate-500 rounded-[25px] px-4 py-2">Submit</button>

                    </div>
            </div>
        </div>) :
        (
        <div className="bg-white w-[50%] h-[150px] text-center py-5 relative">   
                <div className="mb-2">Thank you for contacting us</div>
                <button onClick={onClose} className="text-white bg-slate-500 rounded-[25px] px-4 py-2">Homepage</button>
        </div>)
           }

</div>

</div>    
    );
};

export default ContactModal;