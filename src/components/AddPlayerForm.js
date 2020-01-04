import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    }

    playerInput = React.createRef();

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input
                type="text"
                ref={this.playerInput}
                placeholder="Enter a player's name"
                />

                <input
                type="submit"
                value="Add player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;