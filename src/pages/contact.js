
import React from 'react'
import { NavBar } from '../components/NavBar'
import { useForm } from 'react-hook-form';
import styles from '../css/ContactForm.module.css';

/*next steps making text box a conditional render,
if they've sent a message change a state variable and make it so inputs dont show
thanks them for sending a message
create button for sending another which chanes state varaible back
i just wont create a back end yet and tell him */

export function Contact() {
  // this is destructuring rets from useForm()
  const {
    register, // function used link form inputs to hook form so it can track their values
    handleSubmit, // function called when form is submitted, executes a function passed to it
} = useForm(); // hook that rets an object containing way of managing forms

  // async allows function to use await inside and rets a promise
  const onSubmit = async (data) => {
    console.log(data);
    // sends POST request to backend running on port 5000
    const response = await fetch("http://localhost:5000/send-email", {
      // tells request its of POST type
      method: "POST",
      // tell server the request body is JSON data
      headers: { "Content-Type": "application/json"},
      // converts data into JSON string, good for sending json data over networks
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <div>
      < NavBar />
      <div className={styles.pageBackground}>
        {/**handleSubmit is used for validating data (not used here) and preparing data from form inputs */}
        <form className={styles.form} onSubmit={handleSubmit(onSubmit) }>
          <input {...register("name")} placeholder="Your Name" />
          <input {...register("email")} placeholder="Your Email" />
          <textarea {...register("message")} placeholder="Message..." />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}