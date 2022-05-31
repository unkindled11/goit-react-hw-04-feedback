import { useState, useCallback } from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = useCallback(
    item => {
      setState(prevState => ({
        ...prevState,
        [item]: prevState[item] + 1,
      }));
    },
    [setState]
  );

  const items = Object.values(state);
  const totalSum = items.reduce((item, acc) => (acc += item), 0);

  const positiveFb = state.good;
  const positiveFbPercent = Math.ceil((positiveFb / totalSum) * 100);

  const { good, neutral, bad } = state;

  return (
    <>
      <FeedbackOptions options={options} onLeaveFeedback={handleClick} />

      <Section title="Statistics">
        {totalSum ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalSum}
            percentage={positiveFbPercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Feedback;
