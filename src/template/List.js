import React from 'react'
import Aluno from './Aluno';

const List = (props) => {
    return (
        <div className="list">
            {props.alunos.length > 0 ? (props.alunos.map(aluno => {
                return <Aluno aluno={aluno} key={aluno.id}/>
            })) : <h2>Nenhum egresso encontrado</h2>
            }
        </div>
    )
}

export default List