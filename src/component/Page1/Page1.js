import React ,{ Component } from "react";
import TextCard from '../../container/textCard/textcard'
import PieChart from '../PieChart';
import BarChart from '../BarChart'
import classes from './Pag1.module.scss'

class Page1 extends Component{
    render(){
        return(
            <div>
              <header>Page1</header>
            <div className={classes.cardContainer}>
              <TextCard title="Box1" line1="Type Something here Type Something here" line2="Type Something here Type Something here" />
              <TextCard title="Box2" line1="Box Content goes here" />
              <TextCard title="Box3" line1="Box Content goes here" />       
            </div>
            <div className={classes.chartContainer}>
              <PieChart></PieChart>
              <BarChart></BarChart>
              </div>
          </div>
        )
    }

}
export default Page1;