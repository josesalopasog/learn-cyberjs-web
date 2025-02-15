import { HeartIcon } from "../../assets/icons";

import "./styles.css"

const Footer = () => {
    return (
        <>
            <div className="footer-content">
                <p className="flex flex-row text-[20px] align-middle justify-center ">
                    <span data-lang="madeWith">Made with</span>
                    <span>
                        <HeartIcon className="w-[32px] h-[32px] mx-2 dark:fill-[#00D8FF] fill-[#BD34FE] " />
                    </span>
                    <span data-lang="by">by  José Salopaso!</span>
                </p>
            </div>    
        </>
    );
}

export default Footer; 