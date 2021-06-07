import React, { Component } from 'react';
import Typist from 'react-typist';

type RestartingTypistProps = {
    timeout?: number
    [x:string]: unknown;
}

type RestartingTypistState = {
    typing: boolean
}

export class RestartingTypist extends Component<RestartingTypistProps, RestartingTypistState> {
    constructor(props: RestartingTypistProps) {
        super(props);
        this.state = {
            typing: true
        };
    }

    done = () => {
        this.setState({ typing: false }, () => {
            setTimeout(() => this.setState({ typing: true }), this.props.timeout || 1200);
        });
    };

    render() {
        const { children, ...props } = this.props;
        return this.state.typing ?
            <Typist {...props} onTypingDone={this.done}>{children}</Typist>
            : <span/>;
    }
}
