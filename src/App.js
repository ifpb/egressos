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
    filters:{
        curso : {
                isset: false,
                query: ''
              },
        ano : {
                isset: false,
                query: ''
              },
        campus : {
                isset: false,
                query: ''
      }
    },
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
            let alunosShown = [];
            let ano = []
            let curso = []
            let campus = []

              data.map(aluno => {
                alunos.push(aluno)
                ano.push(aluno.id.toString().substr(0,5));
                curso.push(aluno.curso);
                campus.push(aluno.campus);
                return 0
              })

            ano = [...new Set(ano)]
            curso = [...new Set(curso)]
            campus = [...new Set(campus)]
            
            ano.sort()
            curso.sort()
            campus.sort()

            this.state.filters.map( filter =>
            {
              if(filter.isset)
                console.log('filtra os alunos por '+ filter.query)
            })
            
            this.setState({
                isLoading: false,
                alunos : alunos,
                alunosShown: alunos,
                anos: ano,
                cursos: curso,
                campi: campus
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

    //Filtro
    applyFilter = (campo , value) => {
          this.state.filters.map( filter => {
        
          })
            
        }
      
    searchAluno = (query) => {
    
          if(query === ''){
            this.resetAlunos();
            this.setState({
              query: query
            })
            
          }else{
            this.setState({
              query : query,
              alunosShown: this.state.alunosShown.filter( aluno => {
                    if(aluno.nomeSimples.toUpperCase().includes(query.toUpperCase())){
                      return aluno
                    }else if(aluno.nome.toUpperCase().includes(query.toUpperCase())) {
                      return aluno
                    }
                })
          })
        }
    }

  render() {
    const {isLoading, alunosShown, cursos, campi, anos} = this.state

    return (
      <div className="App">
       
        {isLoading? (<Loading/>) : ( <Fragment>
          <Header applyFilter={this.applyFilter} searchAluno={this.searchAluno} cursos={cursos} campi={campi} anos={anos} />
          <List alunos={alunosShown}/>
          <Footer/>
          </Fragment>)}
        {/* <List/> */}

        
      </div>
    );
  }
}

export default App;
