"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useOrder } from "../context/orderIdContext";
import { useRouter } from "next/navigation"; 


interface User {
  title: string;
  desc: string;
  subject: string;
  type: string;
  refrence: string;
  wordCount: number;
  deadline: string;
  vCode: string;
  file: File | null;
}

const AssignmentForm = () => {
  const [wordCount, setWordCount] = useState<number>(1500);
  const { orderId, setOrderId } = useOrder();
  const [user, setUser] = useState<User>({
    title: "",
    desc: "",
    subject: "",
    type: "",
    refrence: "",
    wordCount: wordCount,
    deadline: "",
    vCode: "",
    file: null,
  });


  const increaseWordCount = () => {
    setWordCount((prev) => prev + 100);
    setUser((prevUser) => ({
      ...prevUser,
      wordCount: prevUser.wordCount + 100,
    }));
  };

  const decreaseWordCount = () => {
    setWordCount((prev) => Math.max(prev - 100, 0));
    setUser((prevUser) => ({
      ...prevUser,
      wordCount: Math.max(prevUser.wordCount - 100, 0),
    }));
  };
  const router = useRouter();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = {
        title: user.title,
        desc: user.desc,
        subject: user.subject,
        type: user.type,
        deadline: user.deadline,
      };
      const response = await axios.post("", formData); // add api /order 
      //console.log(formData);
      if (response.status === 200) {
        const neworderId = response.data.orderid;
        setOrderId(neworderId); //for orderComplete component
        //console.log("Order created with ID:", neworderId);
        router.push("/orderComplete");  
  
        if (user.file) {
          const fileData = new FormData();
          fileData.append("orderId", orderId);
          fileData.append("file", user.file);
          const fileResponse = await axios.post("", fileData); //add api /order/files
          if (fileResponse.status === 200) { 
            console.log("File uploaded successfully:", fileResponse.data);
          }
        }
  
        setUser({   //clear form 
          title: "",
          desc: "",
          subject: "",
          type: "",
          refrence: "",
          wordCount: 1500,
          deadline: "",
          vCode: "",
          file: null,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-2 py-10 ">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 mb-10">
          <div className="flex items-center">
            <Image
              src="static/images/orderRight.svg"
              alt="tick"
              height={30}
              width={30}
            />
            <span className="ml-2 #text-[#000000] font-poppins font-medium">
              Submit Details
            </span>
            <Image
              src="static/images/orderline.svg"
              height={50}
              width={50}
              alt="line"
            />
          </div>
          <i className="fas fa-chevron-right text-gray-400"></i>
          <div className="flex items-center">
            <Image
              src="static/images/orderRight.svg"
              alt="tick"
              height={30}
              width={30}
            />
            <span className="ml-1 text-[#000000] font-poppins font-medium">
              Talk to Expert
            </span>
            <Image
              src="static/images/orderline.svg"
              height={50}
              width={50}
              alt="line"
            />
          </div>
          <i className="fas fa-chevron-right text-gray-400"></i>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-[#2baffc] text-white rounded-full flex items-center justify-center">
              3
            </div>
            <span className="ml-1 text-[#000000] font-poppins font-medium">
              Order Summary
            </span>
            <Image
              src="static/images/orderline.svg"
              height={50}
              width={50}
              alt="line"
            />
          </div>
          <i className="fas fa-chevron-right text-gray-700"></i>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center">
              4
            </div>
            <span className="ml-1 text-[#000000] font-poppins font-medium">
              Complete
            </span>
          </div>
        </div>
      </div>
      <form onSubmit={handleForm}>
        <h1 className="text-2xl  text-[#2c2c2c] font-poppins font-semibold  ">
          Tell us About your Assignment
        </h1>
        <hr className="mb-8  bg-black w-[50%] " />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block font-poppins font-semibold tracking-[1px] text-[#0A0D13] mb-2">
                Title
              </label>
              <input
                required
                type="text"
                value={user.title}
                onChange={(e) => setUser({ ...user, title: e.target.value })}
                placeholder="eg.. AI and Human"
                className="w-full border-2 border-[#010101] rounded-xl p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block font-poppins  font-semibold  tracking-[1px] text-[#0A0D13] mb-2">
                Description
              </label>
              <textarea
                value={user.desc}
                onChange={(e) => setUser({ ...user, desc: e.target.value })}
                required
                placeholder="For Example, write a 250-word essay exploring the relationship between artificial intelligence (AI) and human beings. Focus on how AI complements human creativity, decision-making, and problem-solving abilities..."
                className="w-full border-2  border-[#010101a2] rounded-xl text-[14px] p-2 h-32"
              ></textarea>
              <p className="text-xs text-[#605E5E] mt-1">
                Min. 15 Characters Required
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-poppins font-semibold  tracking-[1px] text-[#0A0D13] mb-2">
                  Subject
                </label>
                <input
                  value={user.subject}
                  onChange={(e) =>
                    setUser({ ...user, subject: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="eg.. Computer science "
                  className="w-full border-2 border-[#010101] rounded-xl p-2"
                />
              </div>
              <div>
                <label className="block font-poppins font-semibold tracking-[1px] text-[#0A0D13] mb-2">
                  Attach File
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files;
                    if (file) {
                      console.log("Selected file:", file);
                    }
                  }}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#55C360] file:text-white hover:file:bg-[#45a350]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-poppins font-semibold mb-2 tracking-[1px] text-[#0A0D13] ">
                  Type
                </label>
                <input
                  value={user.type}
                  onChange={(e) => setUser({ ...user, type: e.target.value })}
                  required
                  type="text"
                  className="w-full border-2 border-[#010101] rounded-xl p-2"
                />
              </div>
              <div>
                <label className="block  font-poppins mb-2 font-semibold tracking-[1px] text-[#0A0D13]">
                  Refrence Style
                </label>
                <input
                  value={user.refrence}
                  onChange={(e) =>
                    setUser({ ...user, refrence: e.target.value })
                  }
                  required
                  type="text"
                  className="w-full border-2 border-[#010101] rounded-xl p-2"
                />
              </div>
            </div>

            <p className="font-poppins font-semibold mb-2 ml-1 tracking-[1px] text-[#0A0D13]">
              No of words
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 -my-8 ">
              <div className="flex items-center">
                <div onClick={decreaseWordCount} className="rounded-l p-2">
                  <Image
                    src="static/images/orderMinusBtn.svg"
                    height={50}
                    width={50}
                    alt="line"
                  />
                </div>

                <input
                  type="text"
                  value={user.wordCount}
                  onChange={(e) =>
                    setUser({ ...user, wordCount: Number(e.target.value) })
                  }
                  className="w-full  border-gray-300 p-2 text-center"
                  readOnly
                />

                <div onClick={increaseWordCount} className="rounded-r p-2">
                  <Image
                    src="static/images/orderPlusBtn.svg"
                    alt="tick"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <div>
                <label className="block font-poppins font-semibold mb-2 tracking-[1px] text-[#0A0D13]">
                  Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={user.deadline}
                    onChange={(e) =>
                      setUser({ ...user, deadline: e.target.value })
                    }
                    defaultValue="2025-02-22"
                    className="w-full border border-gray-300 rounded p-2 mb-6"
                  />
                  <i className="fas fa-calendar-alt absolute right-2 top-3 text-gray-400"></i>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-[100%] rounded-xl bg-[#55C360]  font-bold font-poppins text-[#F3F3F3]  p-2 hover:bg-[#45a350]"
            >
              Submit
            </button>
            <p className="text-xs font-poppins  text-[#ACACAC] mt-2">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <div className="bg-gradient-to-r from-white to-[#d4eefd] ml-10 h-[500px] w-[500px] shadow-xl hover:shadow-2xl -mt-10 rounded-xl flex items-center justify-center transition-all ease-in duration-200">
            <div className="text-center">
              <h2 className="text-5xl font-extrabold font-poppins text-[#55C360]">
                GET <br /> 20% OFF USE <br /> CODE - HELP 20
              </h2>
              <p className="mt-6 text-[#00000094] font-poppins">
                More Assignment and More <br /> Discounts!!
              </p>
              <div className="mt-8">
                <input
                  required
                  type="text"
                  value={user.vCode}
                  onChange={(e) => setUser({ ...user, vCode: e.target.value })}
                  placeholder="Enter your voucher code"
                  className="bg-white text-black font-poppins text-lg px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#55C360] transition-all ease-in duration-200 ring-2 placeholder:text-[17px]"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;