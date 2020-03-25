import React from 'react';
import './index.css';
export default class AddUsers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[{id: null,name: '',username: ''}]
        }
    }

    handleInputChange = (idx) => (event) => {
        debugger;
        const { name, value } = event.target;
        const newuser=this.state.users.map((u,sidx)=>{
            if(idx!==sidx) return u;
            return{...u,[name]:value}
        })
        this.setState({
           users:newuser
        })
      }

    //   handleShareholderNameChange = (idx) => (evt) => {
    //     const newCustomAttributes = this.state.customAttributes.map((shareholder, sidx) => {
    //         if (idx !== sidx) return shareholder;
    //         return { ...shareholder, Quantity: evt.target.value };
    //     });

    //     this.setState({ customAttributes: newCustomAttributes });
    //     this.QtyBaseTotalvalues1(evt);
    // }

    // removePeople(e) {
    //     var array = [...this.state.people]; // make a separate copy of the array
    //     var index = array.indexOf(e.target.value)
    //     if (index !== -1) {
    //       array.splice(index, 1);
    //       this.setState({people: array});
    //     }
    //   }
    render(){
        const {users}=this.state;
        const style={
            backgroundColor:'#f2f2f2',
            padding:'20px',
            borderRadius:'5px'
        }
        return(            
                <div style={style}>
                {
                users.map((user,idx)=>(
                    <form
                        onSubmit={event => {
                        event.preventDefault()
                        if (!users[0].name || !users[0].username) return
        
                        this.props.addUser(users)
                        this.setState({users:[{id: null,name: '',username: ''}]})
                        }}
                    >
                        <label>Name</label>
                        <input type="text" name="name" value={user.name} 
                         placeholder="Your name.."
                        onChange={this.handleInputChange(idx)} />

                        <label>Username</label>
                        <input type="text" name="username" value={user.username}
                        placeholder="Your username.."
                        onChange={this.handleInputChange(idx)} />
                        <button className={"button"}>Add new user</button>
                    </form>
                ))
            }
            </div>              
            
        )
    }
}
