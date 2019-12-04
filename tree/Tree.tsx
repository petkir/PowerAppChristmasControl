import * as React from 'react';
import { debug } from 'util';
import { number } from 'prop-types';


export interface ITreeProps {
    numberOfOrbs: number;
}


export interface ITreeState {
}

export default class TreeComponent extends React.Component<ITreeProps, ITreeState> {
    constructor(props: ITreeProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        const orbRender: Array<{}> = new Array();
        let orbcount: number = this.props.numberOfOrbs;
        if (orbcount > 4) {
            orbcount = 4;
        }
        const repeater: Array<{}> = [...Array(orbcount)];
        
        return (
            <div className="fir">
                <div className="fir__item"></div>
                <div className="fir__item"></div>
                <div className="fir__item"></div>
                <div className="fir__log"></div>
                {
                     repeater.map((e,i) =>  
                     (<div key={'orb' + i} className={"orbs orbs-" + (i + 1)}/>)
                 )
                }
            </div>
        );
    }
}
