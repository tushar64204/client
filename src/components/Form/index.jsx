import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
// import logo from "./assets/logo.png"; // Adjust the path based on your project structure




const Data = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		WhatsAppNumber: "",
    UserType:  "" ,
    Selectedday: ""
	});
	const [ setError] = useState("");
	console.log(data);
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:1221/api/data";
			const { data: res } = await axios.post(url, data);
			navigate("/thankyou");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <div className={styles.announcement_container}>
      <h1 className={styles.announcement_title}>
        For everyone: 3 Days Free Online Vedic Maths Masterclass by Dr. Bhatia
      </h1>
      <div className={styles.announcement_details}>
        <p>
          <strong>Date:</strong> Choose your preferred upcoming day below.
        </p>
        <p>
          <strong>Time:</strong> 8:30 PM to 9:30 PM
        </p>
        <p>
          <strong>Venue:</strong> On Zoom App
        </p>
        <p>
          <strong>100% Result Challenge:</strong> First 100 Students Get Free E-Book
        </p>
        <p>
          <strong>Zoom ID:</strong> Will be Shared on Whatsapp Number
        </p>
        <p>
          <strong>Give wings to your Career with NumericVeda {
            
          }</strong> 
        </p>
      </div>
      <div className={styles.announcement_questions}>
    
        <p>❓ गणित के परीक्षा में ज्यादा मार्क्स लाना चाहते है ?</p>
      </div>
      <button className={styles.book_now_button}>Ragister Now</button>
      <div className={styles.contact_info}>
        
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          {/* <img src={logo} alt="Company Logo" className={styles.logo} /> */}
          <h1>Join Our Community Today!</h1>
         
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>BOOK YOUR CLASS</h1>
           
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="tel"
              placeholder="WhatsAppNumber"
              name="WhatsAppNumber"
              onChange={handleChange}
              value={data.WhatsAppNumber}
              required
              className={styles.input}
            />
            <select
              name="UserType"
              onChange={handleChange}
              value={data.UserType}
              required
              className={styles.input}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="self-learner">Self Learner</option>
              <option value="govt-exam-aspirant">Govt. Exam Aspirant</option>
            </select>
            <select
  name="Selectedday"
  onChange={handleChange}
  value={data.Selectedday}
  required
  className={styles.input}
>
  <option value="">Select Day</option>
  <option value="sunday">Sunday</option>
  <option value="monday">Monday</option>
  <option value="tuesday">Tuesday</option>
  <option value="wednesday">Wednesday</option>
  <option value="thursday">Thursday</option>
  <option value="friday">Friday</option>
  <option value="saturday">Saturday</option>
</select>

            
          
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
            <button type="submit" className={styles.green_btn}>
              Submit
            </button>
          </form>
          <br>
          </br>
          <div className="coolsee">
          <p color="white">
          📲 Any Help What'sApp us: <strong>+91 9466235578</strong>
        </p>
        <p>
          😊 NumericVeda make your calculations Easy and Fast!
        </p>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Data;
