import React from "react";

class RootTemplate extends React.Component {
    state ;
    constructor(){
        super();
        this.state = {name:"Arun",counter:10,listCount:10,myList : []};
        //Testing state change
        // var intID =setInterval(function(comp){
        //     return ()=> {
        //        var newState= Object.assign({},comp.state,{counter: comp.state.counter--});
        //         newState.name = Math.random();
        //         if(!newState.counter){
        //             clearInterval(intID);
        //         }
        //         //comp.state =newState;
        //         comp.setState(newState);
        //     };
        // }(this),15000);
        this.setState(this.state);
    };

  

    refreshData (comp) {
        return()=> {
            var myList = [];
            var a=0;
        var increment=function(obj,callback){
            if(a<comp.state.listCount){
                myList.push({name:a});
                 var newState = Object.assign({},obj,{myList:myList});
                // setTimeout(function(){
                //     comp.setState(newState);
                //     increment(newState,increment)
                // },500); 
                setTimeout(function(){
                    increment(newState,increment)
                },50); 
                setTimeout(function(){
                    comp.setState(newState);
                },20); 
            }
            else{
                //stop
            }
            a++;
        }
        increment(comp.state,increment)
            // for(var a=0;a<comp.state.listCount;a++){
            //     myList.push({name:a});
            //       var newState = Object.assign({},comp.state,{myList:myList});
            //     setTimeout(function(){
            //         comp.setState(newState);
            //     },500);  
            // }
          
        }
    };
textChange(comp){
    return (e)=>{
        var val = e.target.value;
        var newState = Object.assign({},comp.state,{listCount:val});
        comp.setState(newState);
    }
};

    
    render() {
        return (<div>
             Hello React {this.state.name}
             <br/>
             <input type="text" onChange={this.textChange(this)}/>
             <br/>
             <button onClick={this.refreshData(this)}>Load Data</button>
             <br/>
             <ul>
          {this.state.myList.map(function(listValue){
            return <li>{listValue.name}</li>;
          })}
        </ul>
        </div>);
    };
}

module.exports = RootTemplate;