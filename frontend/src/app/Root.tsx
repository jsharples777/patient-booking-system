/* eslint "react/react-in-jsx-scope":"off" */
/* eslint "react/jsx-no-undef":"off" */
import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom';
import debug from 'debug';

const logger = debug('root');

class Root extends React.Component {

    constructor() {
        // @ts-ignore
        super();
    }

    render(): ReactNode {
        logger("Rendering App");
        return (
            <div></div>
        )
    }


    componentDidMount(): void {
        logger('component Did Mount');


    }


}

// @ts-ignore
const element = <Root className="container-fluid justify-content-around"/>;

ReactDOM.render(element, document.getElementById('root'));
