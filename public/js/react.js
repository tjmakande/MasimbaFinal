
class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            AlbumCover:['4eva-cover.jpg', '4now.jpg', 'Street\ Light.jpg'],
            AlbumAlt:['4eva Cover', '4now Cover', 'Street light Cover'],
            SongTitle:['4 eva', '4 now', 'Street lights'],
            SongType:['single', 'single', 'single'],
            slideNumber: 0,
            StreamLinks:['https://lnkfi.re/MM9O2TgV','https://lnkfi.re/XpccQj5B','https://lnkfi.re/rC8ax5VC']
        }

        // this.handlePrevNext = this.handlePrevNext.bind(this)
    }

    handlePrevNext = (direction) => {
        if(direction === 1){ //plus 1
            this.state.slideNumber == 2 ? this.setState({slideNumber: 0}) : this.setState({slideNumber: this.state.slideNumber + 1});
        } else{ //minus 1
            this.state.slideNumber == 0 ? this.setState({slideNumber: 2}) : this.setState({slideNumber: this.state.slideNumber - 1});
        }
    }

    render(){
        return(
            <div className='Music__Slide'>
                <div className="Music__Slide__Details">
                    <div className='Music__Slide__Details__AlbumCover'>
                        <img src={`../../Images/${this.state.AlbumCover[this.state.slideNumber]}`} alt={this.state.AlbumAlt[this.state.slideNumber]}></img>
                    </div>
                    <div className='Music__Slide__Details__SongDetails'>
                        <p className='Music__Slide__Details__SongDetails__Title'>{this.state.SongTitle[this.state.slideNumber]}</p>
                        <p className='Music__Slide__Details__SongDetails__Type'>{this.state.SongType[this.state.slideNumber]}</p>
                    </div>
                </div>
                <div className="Music__Slide__Buttons">
                    <a className='Music__Slide__Buttons__Stream' rel="noopener" href={this.state.StreamLinks[this.state.slideNumber]}>Stream</a>
                    <a className='Music__Slide__Buttons__More' rel="noopener" href='Music'>More music &#8594; </a>
                </div>

                <a className='prev' rel="noopener" onClick={() => this.handlePrevNext(0)}>&#10094;</a>
                <a className='next' rel="noopener" onClick={() => this.handlePrevNext(1)}>&#10095;</a>
                
            </div>
        )
    }
}

const domContainer = document.querySelector('.MusicContent');
ReactDOM.render(React.createElement(Test), domContainer);


