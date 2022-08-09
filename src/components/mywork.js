import React,{Component} from 'react';
import './mywork.css';

class Mywork extends Component{

    render(){
        return(
            <div className={`bg-${this.props.mode} mywork row`}>
                <div>
                    <h1 className={`${this.props.mode}`}>What I Can Do</h1>
                    <div className='hr'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div>
                            <h4 className={`${this.props.mode}`}>Frontend</h4>
                            <p className={`${this.props.mode} para`}>I am equipped with ReactJs and Angular Framework. I have good understanding of Component Based 
                            Technology. I can provide good UI with Bootstrap. Building simple and catchy websites is what i can offer. I can collaborate on GitHub.</p>
                        </div>
                        <div>
                            <h4 className={`${this.props.mode}`}>Backend</h4>
                            <p className={`${this.props.mode} para`}>I have good knowledge of Nodejs. Working in backend, I can work on NoSQL databases such as Mongodb and Firebase.
                            I can work on relational database such as MySql.</p>
                        </div>
                        <div>
                            <h4 className={`${this.props.mode}`}>Problem Solving</h4>
                            <p className={`${this.props.mode} para`}>I love to solve problems by Data structure and Algorithms. I am skilled at writing code in C++, Java, Javascript. I have Leetcode Rating 1574 and Codechef rating 1620.</p>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                </div>
                <div>
                    <h1 className={`${this.props.mode}`}>Projects</h1>
                    <div className='hr'></div>
                </div>
                
                <div className="row">
                    <div className='col'>
                        <div>
                            <video  title='Cafe Billing Application' controls autoPlay={true} loop={true} width="100%" height="400">
                                <source src="https://res.cloudinary.com/dn1awsugj/video/upload/v1660037048/oldvibescaffe_compressed_wiqonl.mp4" type='video/mp4'/>
                            </video>
                        </div>
                        <div>
                            <h6 className={`${this.props.mode} para`}>Cafe Billing Application: <br></br> Technologies used are Angular and Firebase  </h6>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <video title='Buy-Sell Application for University' controls autoPlay={true} loop width="100%" height="400" >
                                <source src="https://res.cloudinary.com/dn1awsugj/video/upload/v1660037034/WCEHelpping_n9s5yl.mp4" type='video/mp4'/>
                            </video>
                        </div>
                        <div>
                            <h6 className={`${this.props.mode} para`}>Old Items Selling Application for University: <br></br> Technologies used are ReactJs and Firebase</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mywork;