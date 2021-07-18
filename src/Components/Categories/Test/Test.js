import React from 'react';
import { client, Query, Field } from "@tilework/opus";
import OverallData from '../../../Context';
import {NavLink} from 'react-router-dom';
import * as styles from './Test.module.css'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xxx: 'default',
      cur: ''
    }

    //this.methodeName = this.methodeName.bind(this)
	
  }

  testSth() {
    this.setState({
      ...this.state,
      xxx: this.context
    })
    console.log(this.state.xxx)    
  }

  componentWillMount() {
    this.setState({
          ...this.state,
          cur: 'ZZZZZZZZ'                    
          });
     
    // console.log(this.state.xxx)
    console.log(this.context.categoriesList)
    // console.log(this.context.categoriesData)
  }

  createCategoriesList() {
    const categoriesList = this.context.categoriesList
    return categoriesList && categoriesList.map(item =>
      <li className={styles.category} id={item.category} key={item.category}>
        {item.category}    
      </li>
    )
  }
  componentDidMount() {
    console.log(this.state.cur)    
  }
  
  // componentWillReceiveProps() {
  //   console.log('333333')
  // }
  
  // componentWillUpdate() {
  //   console.log('44444')
  // }
  
  // componentDidUpdate() {
  //   console.log('55555')
  // }
  
  componentWillUnmount() {
    
  }  

  render() {
    return (
      <section className="men">
          <div className="container">            
            <NavLink className={styles.link} to="/">
                    To start page
            </NavLink>
            
            <button onClick={() => this.testSth()} className={styles.test}>TEST</button>
            <div>{this.context.currencySimbol}</div>
          </div>
      </section>
    );
  } 
}

Test.contextType = OverallData;

export default Test;