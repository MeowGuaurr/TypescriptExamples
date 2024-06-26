import { type PropsWithChildren} from "react"

// type CourseGoalProps = { 
//     title: string; 
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>

export default function CourseGoal({ title, children, id, onDelete}: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>DELETE</button>
//     </article>
// }

// export default CourseGoal;

