import React, { Component } from 'react'
import {Icon, Chip} from 'react-materialize'
import PersonalLinks from './PersonalLinks'
import {campiName, cursoName} from '../info/info';

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
        if(id.toString().substr(0,2) !== '20'){
            if(id.toString().substr(0,1) === '0'){
              id = ('20'+id.toString().substr(0,2)+'-'+id.toString().substr(2,1))
            }else{
              id = ('19'+id.toString().substr(0,2)+'-'+id.toString().substr(2,1))
            }
          }else{
            id  = (id.toString().substr(0,4)+'-'+id.toString().substr(4,1));
          }
        return(
            <Chip>{id}</Chip>
        )
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
                            <div>{cursoName[aluno.curso]}</div>
                            <div> {this._turma(aluno.id)} <Chip>{campiName[aluno.campus]}</Chip></div>
                            
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