import CourseGoal from "./CourseGoal"

interface goals{
    id: number;
    title: string;
    description: string;
}

export default function CourseGoalList ({title, description, id}: goals) {
    return(
        <ul>
            <li key={id} className="grid grid-col-2">
                <CourseGoal 
                    title={title}
                    >
                    <p>{description}</p> 
                </CourseGoal>
            </li>
        </ul>
    );
}