const Contact = () => {
    return (
        <div className="cont flex flex-row mx-auto px-4 sm:px-6 lg:px-8">
              <p className="ml-12 mb-24 text-2xl font-bold place-content-center">
                If you have any questions,<br/>feel free to reach out by filling out the form here.
            </p>
            <form className="grow text-left space-y-4 p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg hover:border-4 hover:border-x-indigo-500 hover:border-t-indigo-500">
                <div>
                    <label className="text-lg font-medium mb-2 px-2" htmlFor="name">Name</label>
                    <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id='name' name="name"/>
                </div>
                <div>
                    <label className="text-lg font-medium mb-2 px-2" htmlFor="email">Email</label>
                    <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id='email' name="email"/>
                </div>
                <div>
                    <label className="text-lg font-medium mb-2 px-2" htmlFor="message">Message</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5" id='message' name="message"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition duration-200">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
