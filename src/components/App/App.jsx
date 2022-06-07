import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class App extends Component {
  
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    leaveFeedback = option => {
        this.setState(prevState => ({
            [option]: prevState[option] + 1,
        }));
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, value) => {
            return total += value;;
        }, 0);
    };
    
    countPositiveFeedbackPercentage = () => {
        return Math.trunc(this.state.good / this.countTotalFeedback() * 100);
    }
    render(){
        const totalFeedback = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state)
        
        return(
            <div className=''>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={options}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {totalFeedback > 0 && (
                        <Statistics 
                            good={this.state.good} 
                            neutral={this.state.neutral}
                            bad={this.state.bad} 
                            total={totalFeedback} 
                            positivePercentage={percentage}
                        /> 
                    )}
                    
                    {totalFeedback < 1 && <Notification message="There is no feedback"/>}
                </Section>
            </div>
        )
    }
};

export default App