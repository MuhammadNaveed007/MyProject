import React from'react';
import {Component} from'react';
import card_html from'./Card.html';
import parser,{ processNodes, convertNodeToElement, htmlparser2 }from'react-html-parser';
import HtmlParser from 'react-html-parser';

var html_c={__html:card_html};
var a=15;// this is variable which i am  using  in below string
var template;// this is string which i am rendering using danderouslysetinnerHtml

class Card extends Component{
 
 constructor(props)
         {
             super(props);
           
         }
        //  componentDidMount() {
        //   this.updateInnerHTMLFromProps();
        // }
        
        // componentDidUpdate() {
        //   this.updateInnerHTMLFromProps();
        // }
        
        // updateInnerHTMLFromProps() {
        //   this.card_html.innerHTML = this.props.html;
        // }
         
    render(){
    //     
         return(
            
                        <div>

                       
                                <div dangerouslySetInnerHTML={{...html_c}}/> 

                          </div>   
     
                )
            }
}
export default Card;