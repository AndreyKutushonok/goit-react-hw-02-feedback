import React, { Component } from 'react';
import FeedbackOptions from '../Feedback/FeedbackOptions';
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
        const stateValues = Object.values(this.state);
        return stateValues.reduce((total, value) => {
            total += value;
            return total;
        });
    };

    countPositiveFeedbackPercentage = () => {
        return Math.trunc(this.state.good / this.countTotalFeedback() * 100);
    }
    render(){
        return(
            <div className=''>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={["good", "neutral", "bad"]} 
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() > 0 ?
                        <Statistics 
                            good={this.state.good} 
                            neutral={this.state.neutral}
                            bad={this.state.bad} 
                            total={this.countTotalFeedback()} 
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        /> 
                    : <Notification message="There is no feedback"/>}
                </Section>
            </div>
        )
    }
};

export default App