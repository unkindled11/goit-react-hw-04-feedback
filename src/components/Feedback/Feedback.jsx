import { Component } from "react";

import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Section from "components/Section";
import Notification from "components/Notification";


const options = ['good', 'neutral', 'bad'];

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = item => {
        this.setState(prevState => ({
            [item]: prevState[item] + 1
        }));
    }

    calcTotal() {
        const data = Object.values(this.state)
        const total = data.reduce((item, acc) => (acc += item), 0);
        return total
    }

    calcPercent(){
        const fromTotal = this.calcTotal();
        const goodPercent = this.state.good;
        return Math.ceil((goodPercent / fromTotal) * 100);
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.calcTotal()
        const percentage= this.calcPercent()
        return (
            <>
                <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
                
                <Section title="Statistics">
                    {total ? (
                        <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        percentage={percentage} /> ) :(
                        <Notification message="There is no feedback" />
                        )}
                    </Section>
            </>
                
        )
    }
}

export default Feedback;