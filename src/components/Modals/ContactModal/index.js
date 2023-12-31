import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { Gender, countries } from "../../../data";

const ContactModal = (props) => {
    const { isOpen, onClose, contactInfo } = props;

    const [submit,setSubmit]=useState(false)
    const [isValid,setisValid]=useState(false)
    const [notEmpty,setNotEmpty]=useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city:'',
        selectedGender: '',

      });
    

      const handleSubmit = () => {
        if (isValid) {
          setSubmit(true);
          onClose();
        }
      };
    
      const handleIsFormValid = () => {
        setisValid(
          formData.address !== "" &&
            formData.email !== "" &&
            formData.city !== "" &&
            formData.selectedGender !== ""
        );
        }
    
    
    const handleGender = (e) => {
        setFormData({
          ...formData,
          selectedGender: e.target.value,
        });
      };
    return (
        <div className="fixed top-0 inset-0 z-10 overflow-y-auto">
        <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99]
     bg-gray-500 bg-opacity-75 h-screen w-screen top-0 left-0 px-4 py-2"
        >
           
        <div className="mx-auto py-2">
        {
            !submit ? 
            (
                 <div className="bg-white  h-fit relative py-4">
           <div className="my-1">
           <IoMdClose className="absolute right-0 mx-2 my-1 top-0" onClick={onClose} />
            </div>
            <div className="grid grid-cols-1 px-5 mx-2 mt-2 items-center align-middle">
                <div className="col-span-1 text-center">
                   <p className="font-bold">Simple form</p>
                </div>
                    <div className="col-span-1 my-1">
                    <label htmlFor="name" className="font-bold">Name</label> <br/>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            name: e.target.value 
                            });
                            setNotEmpty(true)
                        }}
                        className={`border ${!notEmpty ? 'border-gray-400 border-[1px]' : ' border-[#70259B] border-[1px]'} p-2 rounded`}
                       
                        />
                    </div>
                    <div className="col-span-1 my-1">
                    <label htmlFor="email" className="font-bold">Email</label> <br/>
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
                        className={`border ${!notEmpty ? 'border-gray-400 border-[1px]' : ' border-[#70259B] border-[1px]'} p-2 rounded`}
                        />
                    </div>
                <div className="col-span-1 my-1">
                    <label htmlFor="address" className="font-bold">Address</label> <br/>
                    <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            address: e.target.value  // Update the 'name' field in the state
                            });
                        }}
                        className={`border ${!notEmpty ? 'border-gray-400 border-[1px]' : ' border-[#70259B] border-[1px]'} p-2 rounded`}

                        />
                </div>
                <div className="col-span-1 py-1">
                    <label htmlFor="city" className=" font-bold">Select your city</label> <br/>
                    <select
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            city: e.target.value,
                            });
                        }} 
                        className={`w-full bg-white border ${!notEmpty ? 'border-gray-400 border-[1px]' : ' border-[#70259B] border-[1px]'} p-2 rounded`}
                        >
                       <option value="" className="bg-white font-bold">Select a country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>
                                {country.name}
                                </option>
                            ))}
                        </select>
                </div>
                <div>
                    <label htmlFor="gender" className=" font-bold">Gender</label>
                    {Gender.map((data, index) => (
                        <div key={index}>
                        <input
                            type="radio"
                            id={`gender-${index}`} // Use a unique id for each radio button
                            name="gender"
                            value={data.name}
                            checked={formData.selectedGender === data.name}
                            onChange={handleGender}
                            className="text-dark mx-1 bg-[#485FC7]"
                        />
                        <label htmlFor={`gender-${index}`}>{data.name}</label>
                        </div>
                    ))}
                    </div>
                <div className="">
                    <div className="flex items-center text-center my-1 relative">
                        <div className="left-1 ">
                                <button onClick={onClose} className="bg-none text-red-500">Cancel</button>
                        </div>
                        <div className="right-1 text-end absolute"> 
                        <button
                            onClick={handleIsFormValid}
                            disabled={isValid}
                            className={`border ${!isValid? 'bg-[#70259B] text-white rounded-[25px] py-2 px-1' : 'bg-[#ccc8ce] text-gray-500 cursor-not-allowed'} font-displayBlack`}
                            >
                            Submit form
                            </button>
                        </div>
                    </div>
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

</div>    
    );
};

export default ContactModal;