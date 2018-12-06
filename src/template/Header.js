
//Libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {SideNav,SideNavItem,Input,Icon} from 'react-materialize';
import {campiName, cursoName} from '../info/info';




//This component uses a sidenav to organize all the places and filtering components
class SideNavMenu extends Component{
  
  render() {
    const {props} = this

    

        return (
        <SideNav
              trigger={ <nav>
                <div className="nav-wrapper z-depth-1">
                  <ul id="nav-mobile" className="left">
                    <li data-target="slide-out" className="sidenav-trigger" ><Icon>dehaze</Icon></li>
                    <span className="brand-logo center">Egressos IFPB</span>
                  </ul>
                </div>
              </nav>}
            options={{ closeOnClick: false }}
          >
            
            {/* SEARCH-BAR :
                controlled component Input that sends the query down to our main component uses the on change and event
            */}
            <Input s={12} label="Search..."  value={props.query} onChange={event => {props.searchAluno(event.target.value)}} ><Icon>search</Icon></Input>  
            <SideNavItem divider tabIndex="-1"/>  
            
            {/* CATEGORY-SELECT 
                controlled component as a select dropdown that filters the places shown by category
            */}
            <div className="filters">
            <h4>Filtros</h4>
              <Input s={12} type='select' label={ <span>
                  <Icon>where_to_vote</Icon> Campus
                </span>
              } defaultValue='0' onChange={ (e) => {props.toggleFilter('campus' ,e.target.value)}}>
                <option value='all'>Todos</option>
                {props.campi.map(campus => {
                    return <option value={campus} key={campus}>{campiName[campus]}</option>
                })}
                
              </Input>

              <Input s={12} type='select' label={ <span>
                  <Icon>school</Icon> Curso
                </span>
              } defaultValue='0' onChange={ (e) => {props.toggleFilter('curso' ,e.target.value)}}>
                <option value='all'>Todos</option>
                {props.cursos.map(curso => {
                    return <option value={curso} key={curso}>{cursoName[curso]}</option>
                })}
              </Input>

              <Input s={12} type='select' label={ <span>
                  <Icon>date_range</Icon> Ingresso
                </span>
              }  defaultValue='0' onChange={ (e) => {props.toggleFilter('ano' ,e.target.value)}}>
                <option value='all'>Todos</option>
                {props.anos.map(ano => {
                    return <option value={ano} key={ano}>{ano}</option>
                })}
              </Input>
            </div>
            
            <SideNavItem divider tabIndex="-1" /> 
              
            
        </SideNav>
    )
  }
}
;
 
SideNavMenu.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  searchAluno: PropTypes.func.isRequired,
  anos: PropTypes.array.isRequired,
  cursos: PropTypes.array.isRequired,
  campi: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired
}
export default SideNavMenu;