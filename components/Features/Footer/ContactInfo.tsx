// Example: Ensure your imports are correct and handle them as StaticImageData
import location from "@/Assets/shared/icons8-location-24.png";
import message from "@/Assets/shared/icons8-message-50.png";
import telephone from "@/Assets/shared/icons8-telephone-32.png";
import Image from "next/image";

 const GetInTouch = [
  {
    details: "55 Main Street block Malborne, Australia",
    image: location, // StaticImageData object
  },
  {
    details: "support@gmail.com",
    image: message, // StaticImageData object
  },
  {
    details: "+000 (123)456 88",
    image: telephone, // StaticImageData object
  },
];



const GetInTouchColumn = () => {
  return (
    <nav className="flex flex-col">
      <h2 className="text-2xl font-bold">
        Get In Touch
      </h2>
      <ul className="flex flex-col mt-7 text-base font-medium leading-8">
        {GetInTouch.map((link, index) => (
          <div
            key={index}
            className={`flex items-center ${index > 0 ? "mt-3.5" : ""}`}
          >
            {/* Since the image is StaticImageData, the src prop will work */}
            <Image src={link.image} alt="icon" width={20} height={20} />
            <p className="ml-3">
              {link.details}
            </p>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default GetInTouchColumn;
