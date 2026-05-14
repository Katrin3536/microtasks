
type Props = {
  students:StudentType[]
};

export type StudentType = {
    id:number,
    name: string,
    age: number
}

export const NewComponent = ({students}: Props) => {

    return (
        <div>
            <ul>{students.map((student: StudentType) =>{
                return (
                    <li key={student.id}>
                    <span>{student.name} age: {student.age}</span>
                    </li>)
            })}</ul>
        </div>
    );
};