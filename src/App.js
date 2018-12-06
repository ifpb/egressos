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
            let ids = []
            let ano = []
            let curso = []
            let campus = []

              data.map(aluno => {
                if(!ids.includes(aluno.id) && aluno.egresso){
                  ids.push(aluno.id)
                  alunos.push(aluno)
                  if(aluno.id.toString().substr(0,2) !== '20'){
                    if(aluno.id.toString().substr(0,1) === '0'){
                      ano.push('20'+aluno.id.toString().substr(0,2))
                    }else{
                      ano.push('19'+aluno.id.toString().substr(0,2))
                    }
                  }else{
                    ano.push(aluno.id.toString().substr(0,4));
                  }
                  curso.push(aluno.curso);
                  campus.push(aluno.campus);
                }
                
                return 0
              })

           
            ano = [...new Set(ano)]
            curso = [...new Set(curso)]
            campus = [...new Set(campus)]
            
            ano.sort()
            curso.sort()
            campus.sort()

            

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
    toggleFilter = (campo , value) => {
        let isset ;

        if(value === 'all'){
          value = ''
          isset = false
        }else{
          isset = true
        }
          
          this.setState( prevState  => ({
            filters: { ...prevState.filters,
               [campo] : {
                isset: isset,
                query: value
              }
            }
            })
          )
          this.applyFilter(campo)  
        }
      
      applyFilter = (campo) => {
        const {query, isset} = this.state.filters[campo]
        this.resetAlunos()
        if(isset){
          if(campo === 'ano'){
            if(query.substr(0,4) !== '20'){
                this.setState({
                  alunosShown: this.state.alunosShown.filter(aluno => {
                    if(aluno.id.toString().substr(0,2) === query.substr(0,2))
                      return aluno
                  })
                });
              }else{
                this.setState({
                  alunosShown: this.state.alunosShown.filter(aluno => {
                    if(aluno.id.toString().substr(0,4) === query)
                      return aluno
                  })
                });
              }
                        
          }else{
            this.setState({
              alunosShown: this.state.alunosShown.filter(aluno => aluno[campo].includes(this.state.filters[campo].query))
            })
          }
          return 0
        }else{
          
          return 1
        }
          
      }
     //Busca   
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
    const {isLoading, alunosShown, cursos, campi, anos, query} = this.state

    return (
      <div className="App">
       
        {isLoading? (<Loading/>) : ( <Fragment>
          <Header toggleFilter={this.toggleFilter} searchAluno={this.searchAluno} cursos={cursos} campi={campi} anos={anos} query={query}/>
          <List alunos={alunosShown}/>
          <Footer/>
          </Fragment>)}
        {/* <List/> */}

        
      </div>
    );
  }
}

export default App;
