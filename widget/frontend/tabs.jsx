import React from 'react'

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    showContent(index) {
        return () => {
            this.setState({index})
        }
    }

    render(){
        const content = this.props.tabs[this.state.index].content;
        return (
        <h2><ul className="tab">{this.props.tabs.map((item, idx) =>{
            return (<li className="content" key={idx} onClick={this.showContent(idx)}>{item.title}</li>)
        })} 
        
        </ul>
        <article>{content}</article>
        </h2>
        )
    }
}

export default Tabs;