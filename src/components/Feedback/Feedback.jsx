import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';


export class Feedback extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  state = {
    selectedOption: null,
    timeoutId: null,
  };

  handleButtonClick = option => {
    const { onLeaveFeedback } = this.props;
    const { timeoutId } = this.state;
    const newTimeoutId = setTimeout(() => {
      this.setState({ selectedOption: null, timeoutId: null });
    }, 1500);

    onLeaveFeedback(option);
    clearTimeout(timeoutId);

    this.setState({ selectedOption: null, timeoutId: null });
    this.setState({ selectedOption: option, timeoutId: newTimeoutId });
  };

  render() {
    const { options } = this.props;
    // const { selectedOption } = this.state;

    // const goodFeedback = () => {
    //     return (
    //       <span className={css.icon}>
            
    //         {selectedOption === 'good' && (
    //           <span className={css.iconAnimation}>
               
    //           </span>
    //         )}
    //       </span>
    //     );
    //   };
  

    // const badFeedback = () => {
    //   return (
    //     <span className={css.icon}>
          
    //       {selectedOption === 'bad' && (
    //         <span className={css.iconAnimation}>
              
    //         </span>
    //       )}
    //     </span>
    //   );
    // };

    return (
      <ul className={css.feedbackOptions}>
        {options.map(option => {
          return (
            <li className={css.feedbackOptionsItem} key={option}>
              <button
                className={css.feedbackBtn}
                type="button"
                aria-label={`leave ${option} feedback`}
                onClick={() => this.handleButtonClick(option)}
              >
                {/* {option === 'good' && goodFeedback()} */}
                {/* {option === 'neutral' && } */}
                {/* {option === 'bad' && badFeedback()} */}
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}