"use client";
import { useState } from "react";
import { apiClient } from "@/lib/api-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

interface User {
  title: string;
  desc: string;
  subject: string;
  type: string;
  deadline: string;
  file: File | null;
  couponCode: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

const AssignmentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState<User>({
    title: "",
    desc: "",
    subject: "",
    type: "",
    deadline: "",
    file: null,
    couponCode: ""
  });

  const validateFile = (file: File | null) => {
    if (!file) return "Please attach a file";
    if (file.size > MAX_FILE_SIZE) return "File size must be less than 10MB";
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "Only PDF, Word, Excel, and text files are allowed";
    }
    return null;
  };

  const validateForm = () => {
    if (!user.title.trim()) return "Title is required";
    if (!user.desc.trim()) return "Description is required";
    if (user.desc.length < 15) return "Description must be at least 15 characters";
    if (!user.subject.trim()) return "Subject is required";
    if (!user.type.trim()) return "Type is required";
    if (!user.deadline) return "Deadline is required";

    const fileError = validateFile(user.file);
    if (fileError) return fileError;

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validationError = validateForm();
      if (validationError) {
        toast.error(validationError);
        setIsLoading(false);
        return;
      }

      const orderData = {
        title: user.title,
        desc: user.desc,
        subject: user.subject,
        type: user.type,
        deadline: user.deadline,
        couponCode: user.couponCode
      };

      console.log('Creating order with data:', orderData);
      const response = await apiClient.createOrder(orderData);
      console.log('Order creation response:', response);
      
      if (response.orderId) {
        let fileUploadError = false;
        
        if (user.file) {
          try {
            console.log('Uploading file for order:', response.orderId);
            await apiClient.uploadOrderFiles(response.orderId, [user.file]);
            console.log('File upload successful');
          } catch (uploadError) {
            console.error('File upload failed:', uploadError);
            fileUploadError = true;
            // Continue with redirect even if file upload fails
            toast.error("Order created but file upload failed. Please try uploading the file later.");
          }
        }

        if (!fileUploadError) {
          toast.success("Order created successfully!");
        }
        
        console.log('Redirecting to:', `/orderComplete?orderId=${response.orderId}`);
        router.push(`/orderComplete?orderId=${response.orderId}`);
      } else {
        throw new Error('No order ID received from server');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create order";
      toast.error(errorMessage);
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
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
      <form onSubmit={handleSubmit}>
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
                  onChange={(e) => setUser({ ...user, subject: e.target.value })}
                  required
                  type="text"
                  placeholder="eg.. Computer science "
                  className="w-full border-2 border-[#010101] rounded-xl p-2"
                />
              </div>
              <div>
                <label className="block font-poppins font-semibold tracking-[1px] text-[#0A0D13] mb-2">
                  Attach File (Required)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.xls,.xlsx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const fileError = validateFile(file);
                      if (fileError) {
                        toast.error(fileError);
                        e.target.value = '';
                        return;
                      }
                      setUser({ ...user, file });
                    }
                  }}
                  required
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#55C360] file:text-white hover:file:bg-[#45a350]"
                />
                <p className="text-xs text-[#605E5E] mt-1">
                  Max size: 10MB. Allowed types: PDF, Word, Excel, Text
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-poppins font-semibold mb-2 tracking-[1px] text-[#0A0D13]">
                  Type
                </label>
                <input
                  value={user.type}
                  onChange={(e) => setUser({ ...user, type: e.target.value })}
                  required
                  type="text"
                  placeholder="eg.. Essay, Research Paper"
                  className="w-full border-2 border-[#010101] rounded-xl p-2"
                />
              </div>
              <div>
                <label className="block font-poppins font-semibold mb-2 tracking-[1px] text-[#0A0D13]">
                  Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={user.deadline}
                    onChange={(e) => setUser({ ...user, deadline: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full border-2 border-[#010101] rounded-xl p-2"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-poppins font-semibold mb-2 tracking-[1px] text-[#0A0D13]">
                Coupon Code
              </label>
              <input
                type="text"
                value={user.couponCode}
                onChange={(e) => setUser({ ...user, couponCode: e.target.value })}
                placeholder="Enter coupon code if you have one"
                className="w-full border-2 border-[#010101] rounded-xl p-2"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !user.file}
              className="bg-[#2baffc] text-white px-8 py-3 rounded-lg hover:bg-[#1a9ee6] transition-colors w-full md:w-auto disabled:bg-gray-400"
            >
              {isLoading ? "Creating Order..." : "Submit Order"}
            </Button>
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;