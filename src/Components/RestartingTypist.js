import React, { Component } from "react";
import Typist from "react-typist";

export class RestartingTypist extends Component {
    state = {
        typing: true
    };

    done = () => {
        this.setState({ typing: false }, () => {
            setTimeout(() => this.setState({ typing: true }), this.props.timeout || 1200);
        });
    };

    render() {
        const {children, timeout, ...props} = this.props;
        return this.state.typing ?
            <Typist {...props} onTypingDone={this.done}>{children}</Typist>
            : <span/>;
    }

}
