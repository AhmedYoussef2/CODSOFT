import "../styles/Footer.css"

const Footer= ()=>{
    return(
        <footer className="text-black bg-white text-center p-6 footer ">
            &copy; {new Date().getFullYear()} Ahmed Youssef. All rights reserved.
        </footer>
    );
  };

  export default Footer;