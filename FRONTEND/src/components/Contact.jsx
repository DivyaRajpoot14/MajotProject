
import { Formik,Form,Field } from "formik";
const Contact=() => {
   return(
    <>
  
    <Formik>
 
    <div className="w-[100dvw] h-[100dvh] bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center">
      <div className=" w-[50dvw] h-[65dvh] bg-white shadow-xl border-2 border-gray-100 m-5">
          <Form>
            <h1 className="text-blue-500 font-bold text-center text-2xl mt-2">Contact</h1>
      <div className="h-20  mt-5 p-5">
<div className="w-[95%] h-11 relative ">
    <Field type="text" id="firstName"  name="firstName" className="block outline-none outline-zinc-400  px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border dark:focus:border-blue-500 focus:outline-blue-500  focus:outline focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="firstName" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transfor m -translate-y-4 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Name</label>
    
</div>
</div>
<div className="h-20 p-5">
<div className="w-[95%] h-11 relative">
    <Field type="email" id="email" name="email" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="email" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Id</label>
    
</div>
</div>
<div className="h-20 p-5">
<div className="w-[95%] h-11 relative">
    <Field type="text" id="subject" name="subject" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="subject" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject</label>
    
</div>
</div>
<div className="h-40 p-5">
   <div className="w-[95%]  relative">
        <Field as="textarea" type="text" id="message"  name="message" className="block h-32 outline-none outline-zinc-400  focus:outline-none focus:outline-blue-600 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="message" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
    </div>
   </div>
<div className="h-16 w-[95%] flex justify-start p-5  ">
<button type="submit" className="w-[100px] rounded-lg h-12  text-white bg-blue-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sent</button>
</div> 
</Form>
      </div>

    </div>
    
    </Formik>
    </>
   )

}
export default Contact;
