import React, { Component } from "react";
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Page1 = require('../components/API/CONTENTLISTINGPAGE-PAGE1.json');
const Page2 = require('../components/API/CONTENTLISTINGPAGE-PAGE2.json');
const Page3 = require('../components/API/CONTENTLISTINGPAGE-PAGE3.json');


class HomePage extends Component{
    constructor(){
        super();
        this.state={
            page:1,
            lazyloader:false,
            data:[],
            dataLoader:true
        };
        this.endReached = this.endReached.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.LoadMoreData = this.LoadMoreData.bind(this);
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
        // this.setState({
        //     data:Page1['page']['content-items']['content']
        // });
        this.LoadMoreData();
    }
    LoadMoreData(){
        let data = null;
        if(this.state.dataLoader){
            if(this.state.page === 1){
                data = [...this.state.data,...Page1['page']['content-items']['content']];
            }
            else if(this.state.page === 2){
                data = [...this.state.data,...Page2['page']['content-items']['content']];
            }else if(this.state.page === 3){
                data = [...this.state.data,...Page3['page']['content-items']['content']];
                this.setState({
                    dataLoader:false
                });
            }
            this.setState({
                data:data
            });
        }
        
    }
    handleScroll(e) {
        let footer_height = document.getElementById("footer").clientHeight;
        var w = window.innerHeight;
    
        var body = document.body;
        var html = document.documentElement;
    
        var height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
        var f_height = height - footer_height;
        var sc_height = html.scrollTop + w + 550;
        if (parseInt(f_height) <= parseInt(sc_height)) {
            if(this.state.dataLoader){
                console.log(this.state.page+1);
                this.setState({
                    page:this.state.page+1
                },
                () =>this.endReached()
                )
            }
        }
    }
    endReached = () => {
        if(this.state.page <= 3){
           this.LoadMoreData();
        }else{
            this.setState({
                dataLoader:false
            });
        }
    };

    render(){
        console.log(this.state.data);
        let content = this.state.data.length ? (
            this.state.data.map((dt, i) => (
              <Card
                key={i}
                name={dt.name}
                images={dt.image}
                ></Card>
            ))):null;
        return(
            <>
                <Navbar></Navbar>
                <div className="App mt-3">
                    <header className="App-header">
                        
                        <div className="row" style={{width:'100%'}}>
                            {content}
                        </div>
                    </header>
                </div>
                <div id="footer"></div>
            </>
        )
    }

}
export default HomePage;