import "../Input/Input.modules.css";
import { FaBorderAll } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { RiCellphoneFill } from "react-icons/ri";
import { IoHeadset } from "react-icons/io5";
import { GiBilledCap } from "react-icons/gi";
import { BsFillSpeakerFill } from "react-icons/bs";
import { MdToys } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaTabletAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

const Input = ({ handleChange, value, title, name, icon }) => {
    return (
        <label className="category-label-container">
            <div onChange={handleChange}>{icon}</div>
            <input onChange={handleChange} type="radio" value={value} name={name} />
            {title}
        </label>
    );
};

export default Input;