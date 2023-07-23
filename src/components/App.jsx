import React, { Component } from 'react';
import { Markup } from 'components/Markup/Markup';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistic} from 'components/Statistic/Statistic';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral * 0.5 + bad)) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const propsStatistics = {
      good,
      neutral,
      bad,
      total,
      positivePercentage: this.countPositiveFeedbackPercentage(),
    };

    return (
      <div className="main-wrapper">
        <Markup title="Please leave feedback">
          <Feedback
        
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Markup>
        <Markup title="Statistic">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic props={propsStatistics} />
          )}
        </Markup>
      </div>
    );
  }
}