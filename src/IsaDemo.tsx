import * as React from 'react';

interface Props {
  doneLevels: string[];
}

interface State {
  currentDoneLevel: number;
}

const initialProps: Props = {
  doneLevels: ['Kinda Done.', 'Done.'],
};

class IsaDemo extends React.Component<Props, State> {
  constructor(props: Props = initialProps) {
    super(props);
    this.state = { currentDoneLevel: 0 };
  }

  updateDoneness(currentDoneLevel: number) {
    this.setState({ currentDoneLevel });
  }

  onIncrement = () =>
    this.updateDoneness(
      Math.min(
        this.state.currentDoneLevel + 1,
        this.props.doneLevels.length - 1,
      ),
    );
  onDecrement = () =>
    this.updateDoneness(Math.max(this.state.currentDoneLevel - 1, 0));

  render() {
    const { doneLevels } = this.props;

    if (this.state.currentDoneLevel < 0) {
      throw new Error('Isa is never not done with this.');
    }

    if (this.state.currentDoneLevel > doneLevels.length) {
      throw new Error('Isa is done with this.');
    }

    const howDoneIsIsa = doneLevels[this.state.currentDoneLevel];

    return (
      <div className="Section">
        <div className="heading">
          <i>{howDoneIsIsa}</i>
        </div>
        <div className="Buttons">
          <button onClick={this.onDecrement}>Less Done</button>
          <button onClick={this.onIncrement}>More Done</button>
        </div>
      </div>
    );
  }
}

export default IsaDemo;
