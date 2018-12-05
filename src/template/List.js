import React from 'react'
import Aluno from './Aluno';

const List = (props) => {
    return (
        <div className="list">
            {props.alunos.map(aluno => {
                return <Aluno aluno={aluno} key={aluno.id}/>
            })}
        </div>
    )
}

export default List