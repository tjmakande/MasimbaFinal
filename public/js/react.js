class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Alexander Hamilton'
        }
    }
    render(){
        return React.createElement(
            <p>{this.state.name}</p>
        )
    }
}

const domContainer = document.querySelector('#Test');
ReactDOM.render(React.createElement(<Test/>), domContainer);


