import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import PhoneInput, {
  formatPhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const FormComponent = () => {
  // name, email, phone, businessname, description
  const [phoneNumber, setPhoneNumber] = useState();
  const [aggree, setAggree] = useState(false);
  const [value, setValue] = useState();
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    setFormValue({ ...formValue, phoneNumber: phoneNumber });
  }, [phoneNumber]);
  // console.log(formValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: formValue.firstName + " " + formValue.lastName,
        email: formValue.email,
        phone: formValue.phoneNumber,
        businessname: formValue.company,
        description: formValue.message,
      })
    );
    const submitedData = {
      name: formValue.firstName + " " + formValue.lastName,
      email: formValue.email,
      phone: formValue.phoneNumber,
      businessname: formValue.company,
      description: formValue.message,
    };
    fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitedData),
    });
  };

  return (
    <div>
      <form className="pb-3.5 flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <CustomeLabel name={"First Name"} />
            <input
              className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none  py-2.5 px-4"
              placeholder="Enter your Frist Name "
              type="text"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <CustomeLabel name={"Last Name"} />
            <input
              className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
              placeholder="Enter your Last Name "
              type="text"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <CustomeLabel name={"Email"} />
            <input
              className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
              placeholder="your@company.com"
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relatived">
            <CustomeLabel name={"Phone Number"} />
            <div className="flex">
              {/* <select
                className="  border rounded-l-lg text-[#333] px-3.5 bg-[#F2F2F2]"
                name="country"
                value={formValue.country}
                onChange={handleChange}
                required
              >
                <option>US</option>
                <option>India</option>
                <option>India</option>
                <option>India</option>
              </select>
              <input
                className=" relative border border-[#E6E6E6] rounded-r-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
                placeholder="+1 (555) 000-0000"
                type="tel"
                name="phoneNumber"
                value={formValue.phoneNumber}
                onChange={handleChange}
                required
              /> */}

              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="BD"
                value={phoneNumber}
                onChange={setPhoneNumber}
                className=" relative border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full outline-none  focus:outline-none py-2.5 px-4"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="flex pb-2 text-sm lg:text-[16px] text-[#1A1A1A] capitalize font-normal ">
            Company
          </label>
          <input
            className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
            placeholder="Enter your company name"
            type="text"
            name="company"
            value={formValue.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <CustomeLabel name={"Message"} />
          <textarea
            className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
            placeholder="Tell us what we can help you with"
            type="text"
            rows={4}
            name="message"
            value={formValue.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              className=""
              value={aggree}
              onChange={() => setAggree(!aggree)}
              required
              // checked={aggree}
            />
            {/* <span class="checkbox-custom relative h-4 w-4 border border-gray-400 rounded-md bg-white flex items-center justify-center ml-2 checked:bg-primary">
                    <span class="checkmark h-2 w-2 bg-primary rounded-full"></span>
                  </span> */}
            <p className="  m-0 p-0 font-medium  ">
              <span className="text-[#1A1A1A] text-sm lg:text-[16px] ">
                I’d like to receive more information about company, I understand
                and agree to the
              </span>
              <span className="text-[#2AA7DF] text-sm lg:text-[16px]  ">
                {" "}
                Privacy Policy
              </span>
            </p>
          </label>
        </div>
        <button
          disabled={!aggree}
          className="w-full px-5 py-2.5 bg-[#2AA7DF] text-white rounded-lg font-medium mt-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FormComponent;

export const CustomeLabel = ({ name }) => {
  return (
    <label className="flex  pb-2 lg:text-[16px] text-sm text-[#1A1A1A] capitalize font-normal ">
      {name}

      <span className="text-[#d92c20dc] text-[8px] px-1 py-1">
        <FaStarOfLife />
      </span>
    </label>
  );
};
