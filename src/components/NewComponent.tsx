import {Button} from './Button.tsx';

type Props = {
    students: StudentType[]
};

export type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = ({students}: Props) => {
    const myFirstSubscriber = (name:string) => {
        alert(name);
    };

    const mySecondSubscriber = (name:string) => {
        alert(name);
    };

    const mySubscriber=()=>{
        alert("Simply button")
    }

    return (
        <div>
            <ul>{students.map((student: StudentType) => {
                return (
                    <li key={student.id}>
                        <span>{student.name} age: {student.age}</span>
                    </li>);
            })}</ul>

            <div>
                <Button title={'MyYouTubeChannel-1'} callBack={()=>myFirstSubscriber('First')}/>
                <Button title={'MyYouTubeChannel-2'} callBack={()=>mySecondSubscriber('Second')}/>
                <Button title={'MyChannel'} callBack={mySubscriber}/>
            </div>
        </div>
    );
};