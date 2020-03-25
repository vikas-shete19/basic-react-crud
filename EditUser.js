import React from 'react';

export default class EditUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
          users:this.props.currentuser
        }
    }

    componentDidUpdate(pervProps){
      if (pervProps.currentuser!==this.props.currentuser){
        this.setState({users:this.props.currentuser})
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
                  this.props.updateUser(user.id, user)
                  }}
              >
                  <label>Name</label>
                  <input type="text" name="name" value={user.name} onChange={this.handleInputChange(idx)} />
                  <label>Username</label>
                  <input type="text" name="username" value={user.username} onChange={this.handleInputChange(idx)} />
                  <button className="button muted-button">Update user</button>
                  <button onClick={() => this.props.setEditing(false)} className="btn button muted-button">
                    Cancel
                  </button>
              </form>
          ))
      }
      </div>
        )
    }
}