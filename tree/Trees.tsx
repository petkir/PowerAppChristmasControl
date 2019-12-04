import * as React from 'react';
import TreeComponent from './Tree';



export interface ITreesProps {
    numberOfTrees: number;
    numberOfOrbs:number;
}

export interface ITreesState {
}

export default class TreesComponent extends React.Component<ITreesProps, ITreesState> {
    constructor(props: ITreesProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        const repeater: Array<{}> = [...Array(this.props.numberOfTrees)];
        debugger;
        const renderarray: JSX.Element[] = [];
        for (let index = 0; index < this.props.numberOfTrees; index++) {
            renderarray.push(<TreeComponent key={'Treeindex' + index} numberOfOrbs={this.props.numberOfOrbs} />);

        }
        return (
            <div className="orderbeside">
                {
                    repeater.map((e,i) =>  
                        (<TreeComponent key={'tree'+i} numberOfOrbs={this.props.numberOfOrbs}/>)
                    )
                }
            </div>
        );
    }
}
