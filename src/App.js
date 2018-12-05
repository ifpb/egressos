import React, { Component , Fragment } from 'react';
import './style/css/App.css';
import Header from './template/Header';
import Footer from './template/Footer';
import List from './template/List';
import Loading from './template/Loading';


class App extends Component {
  state = {
    alunos : [],
    alunosShown: [],
    hasError : false,
    query : '',
    isLoading : true
  }
  //INICIALIZAÇÃO DOS ALUNOS
  componentDidMount() {
    this._getAlunos()
  }

  //FUNÇÃO FETCH DO JSON
  _getAlunos = () => {
    
       fetch('https://raw.githubusercontent.com/ifpb/egressos/master/data/egressos.json')
      .then(res => res.json())
      .then( (data) => 
          {
            let alunos = []
              data.map(aluno => {
                alunos.push(aluno)
                return 0
              })
              this.setState({
                isLoading: false,
                alunos : alunos,
                alunosShown: alunos
              })
          }
      ).catch ((e) => {
          this.setState({
            hasError: true
          })
      })
  
  }

  
  resetAlunos = () => {
    this.setState({
      alunosShown: this.state.alunos
    })
  }

  render() {
    const {isLoading, alunosShown} = this.state
    return (
      <div className="App">
       
        {isLoading? (<Loading/>) : ( <Fragment>
          <Header/>
          <List alunos={alunosShown}/>
          <Footer/>
          </Fragment>)}
        {/* <List/> */}

        
      </div>
    );
  }
}

export default App;
