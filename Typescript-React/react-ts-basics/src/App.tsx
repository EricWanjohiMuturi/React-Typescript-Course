import CourseGoal from './components/CourseGoal'
import CourseGoalHeader from './components/Header'
import goalsImg from './assets/goals.jpg'
import './App.css'
import { useState } from 'react'

type CourseGoals={
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  
  function handleAddGoals(){
    setGoals(prevGoals => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn in depth!'
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <>
     <main>
        <CourseGoalHeader image={{src: goalsImg, alt: "A list of goals" }}>
            <h1></h1>
        </CourseGoalHeader>

        <button onClick={handleAddGoals}>Add Goal</button>
        <ul>
          {goals.map((goal)=> (
            <li key={goal.id}>
              <CourseGoal 
                title={goal.title}
                >
                <p>{goal.description}</p> 
              </CourseGoal>
            </li>
          ))}
        </ul>
        
     </main>
    </>
  );
}

export default App


