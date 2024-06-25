import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>,path:"https://github.com/avishkaJSPshehan"},
    {icon: <FaLinkedinIn/>,path:"https://www.linkedin.com/in/avishka-shehan-1794a0311/"},
    {icon: <FaStackOverflow/>,path:"https://stackoverflow.com/users/25678278/avishka-shehan"},
    {icon: <FaTwitter/>,path:""},
    
];

const Social = ({containerStyles,iconStyle}) => {
    return <div className={containerStyles}>
        {socials.map((item,index) => {
            return (
                <Link key={index} href={item.path} className={iconStyle}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
};

export default Social;