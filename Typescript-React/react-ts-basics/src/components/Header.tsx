import type { ReactNode } from "react";

interface CourseGoalHeader{
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode
};

export default function CourseGoalHeader({image,children}:CourseGoalHeader){
    return(
       <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header> 
    );
}