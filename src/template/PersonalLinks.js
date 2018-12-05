import React, {Fragment} from 'react'
import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'
import twitter from '../icons/twitter.png'
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import lattes from '../icons/lattes.png'
import researchgate from '../icons/researchgate-logo.png'
const PersonalLinks = (props) => {


    return(
        <Fragment>
            {props.aluno.linkedin? (<a href={props.aluno.linkedin} className="button"><img src={linkedin} alt="LinkedIn"></img></a>):('')}
            {props.aluno.github? (<a href={props.aluno.github} className="button"><img src={github} alt="GitHub"></img></a>):('')}
            {props.aluno.facebook? (<a href={props.aluno.facebook} className="button"><img src={facebook} alt="Facebook"></img></a>):('')}
            {props.aluno.lattes? (<a href={props.aluno.lattes} className="button"><img src={lattes} alt="Lattes"></img></a>):('')}
            {props.aluno.researchgate? (<a href={props.aluno.researchgate} className="button" ><img src={researchgate} alt="ResearchGate"></img></a>):('')}
            {props.aluno.twitter? (<a href={props.aluno.twitter} className="button"><img src={twitter} alt="Twitter"></img></a>):('')}
            {props.aluno.instagram? (<a href={props.aluno.instagram} className="button"><img src={instagram} alt="Instagram"></img></a>):('')}
        </Fragment>
    )
}

export default PersonalLinks