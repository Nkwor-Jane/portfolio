import heart_icon from "../assets/heart.svg"
const Footer = () => {
  return (
    <footer className="p-6 flex justify-between items-center">
      <p className=" text-center text-white font-semibold">&copy;{" "}2024</p>
      <p className="flex text-white ">Made with {" "}<img src={heart_icon} alt="" className="w-6 animate-ping"/>{" "} by Nkwor Jane</p>
      
      
    </footer>
  )
}

export default Footer