import { useState } from "react";

const ContactModal = (props) => {
    const { isOpen, onClose, contactInfo } = props;

    const [submit,setSubmit]=useState(false)
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
            ( <div className="bg-white w-[50%] h-fit relative">
            <button className="absolute right-0 mx-2 my-1" onClick={onClose}>Close</button>
           <form className="py-4 mx-auto px-6">
            <div>
                <p className="lg:text-[28px] text-[14px] ">Contact form</p>
            </div>
            <div className="grid-cols-2 my-1 lg:my-2 mx-4 px-5">
                <div className="col-span-1 mb-1 mx-5">
                    <label htmlFor="subject" className="mx-1">Subject:</label>
                    <br />
                    <input type="text" id="subject" className="border-[1px] border-gray-400 bg-none rounded-[5px] focus:border-none hover:border-none"/>
                </div>
                <div className="col-span-1 mb-1">
                </div>
            </div>
            <div className="mx-auto">
                <button type="submit" onClick={handleSubmit} className="bg-">Submit</button>
            </div>
           </form>
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