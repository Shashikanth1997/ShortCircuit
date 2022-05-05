import React,{Component} from "react"; 
class ComponentA extends Component{
    constructor(){
        super() 
        this.state={
            isLinkedIn:true
        }
    } 
    render(){
        return this.state.isLinkedIn && <div>welcome shashi</div>

        
    }
} 
export default ComponentA