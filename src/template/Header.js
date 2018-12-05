
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import {SideNav,SideNavItem,Input,Icon} from 'react-materialize';
//Components



//This component uses a sidenav to organize all the places and filtering components
const SideNavMenu = compose() ( props =>
(
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
        <Input s={12} type='select' label="Campus" defaultValue='0' onChange={ (e) => {props.applyFilter('campus' ,e.target.value)}}>
          <option value='all'>Todos</option>
          {props.campi.map(campus => {
              return <option value={campus}>{campus}</option>
          })}
          
        </Input>

        <Input s={12} type='select' label="Curso" defaultValue='0' onChange={ (e) => {props.applyFilter('curso' ,e.target.value)}}>
          <option value='all'>Todos</option>
          {props.cursos.map(curso => {
              return <option value={curso}>{curso}</option>
          })}
        </Input>

        <Input s={12} type='select' label="Ingresso" defaultValue='0' onChange={ (e) => {props.applyFilter('ano' ,e.target.value)}}>
          <option value='all'>Todos</option>
          {props.anos.map(ano => {
              return <option value={ano}>{ano.substr(0,4)+'/'+ano.substr(4,1)}</option>
          })}
        </Input>
        <SideNavItem divider tabIndex="-1" /> 
          
        
    </SideNav>
)
);
 
SideNavMenu.propTypes = {
  searchPlace: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired
}
export default SideNavMenu;