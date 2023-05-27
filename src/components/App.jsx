import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOprions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notitfication';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = label => {
    this.setState(prevState => {
      return { [label]: prevState[label] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce((acc, value) => {
      acc = acc + value;
      return acc;
    }, 0);

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = (this.state.good / totalFeedback) * 100;

    return parseInt(positivePercentage);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOprions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}

          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
