import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/100-life-goals.png"
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";
import { useState } from "react";



export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);
   
  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal) =>
    goal.id !== id))
    return //...
  }

  return (
    <main>
      <Header imageProps={{src: goalsImg, alt: "This are goals"}}>
        <h1>This is an excercise constructing a header</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
