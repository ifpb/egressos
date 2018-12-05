import React, { Component } from 'react'
import {Icon, Chip} from 'react-materialize'
import PersonalLinks from './PersonalLinks'

class Aluno extends Component {
    state = {
        flip: false
    }

    _flipCard() {
        this.setState({
            flip: !this.state.flip
        })
    }

    _turma(id){
        id = id.toString().substr(0,4) + '-' + id.toString().substr(4,1)
        return(
            <Chip>{id}</Chip>
        )
    }
    _campus(campus){
        campus = campus.substr(5).toUpperCase();
        switch(campus){
            case 'CG':
                return <Chip>Campina Grande</Chip>
            case 'JP':
                return <Chip>João Pessoa</Chip>
            case 'CZ':
                return <Chip>Cajazeiras</Chip>
            default:
                return 0
        }
        
    }
    _curso(curso){
        switch(curso.toUpperCase()){
            case 'CSTSI':
                return <h4>Sistemas Para Internet</h4>
            case 'ADS':
                return <h4>Análise e Desenvolvimento de Sistemas</h4>
            default:
                return 0
        }
    }
    render(){
        const {flip} = this.state
        const {aluno} = this.props
        return (
        <div className={flip? ('egresso flip'): ('egresso')}>
            <div className="front">
                <div className="box">
                    <figure>
                        <img src={aluno.avatar? ('https://raw.githubusercontent.com/ifpb/egressos/master/img/egressos/'+aluno.avatar) : ('https://raw.githubusercontent.com/ifpb/egressos/master/img/egressos/placeholder.jpg')} alt=""/>
                    </figure>

                    <button onClick={ () => {this._flipCard()}} className="turn-over"><Icon>more_vert</Icon></button>    
                    <div className="name">
                        <h2>{aluno.nomeSimples}</h2>
                    </div>
                </div>
            </div>

            <div className="back">
                <div className="box">
                    <button onClick={ () => {this._flipCard()}} className="turn-over"><Icon>clear</Icon></button>
                        <div className="info">
                            <h2>{aluno.nomeSimples}</h2>
                            <hr></hr>
                            <div>{this._curso(aluno.curso)}</div>
                            <div> {this._turma(aluno.id)} {this._campus(aluno.campus)}</div>
                            
                        </div>
                        <div className="links">
                            <PersonalLinks aluno={aluno}/> 
                        </div>
                </div>
            </div>
        </div>)
    }
}

export default Aluno