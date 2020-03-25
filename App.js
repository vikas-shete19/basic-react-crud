import React from 'react';
import UserDetails from './UserDetails.js';
import AddUsers from './AddUsers.js';
import EditUser from './EditUser.js';
import './index.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:'Vikas',username:'vikas123'},
                {id:2,name:'abcd',username:'abcd123'}
            ],
            editing:false,
            currentuser:[]
        }
    }

    addUser = user => {
        var details = this.state.data;
        var length = this.state.data.length + 1;    
        user.map(userdet=>(
            details.push({id:length,name:userdet.name,username:userdet.username})
        ))
        console.log(details);
        this.setState({            
            data:details
        })        
      }

      deleteUser = (id) =>()=> {
          debugger;
          //var custom = this.state.customAttributes.filter((s, sidx) => idx !== sidx);
          var details =this.state.data.filter(user => user.id !== id);
          //details= details.filter(user => user.id !== id);
          this.setState({data:details})
      }

       editRow = user => {
           debugger;
           var details =this.state.data.filter(u => u.id === user.id);
        
           this.setState({currentuser:details})            
           this.setState({editing:true})
      }

       updateUser = (id, updatedUser) => {
           debugger;
           var listDetails = this.state.data;
           listDetails.forEach(user=>{
               if (user.id===id){
                   user.name =updatedUser.name;
                   user.username = updatedUser.username;
               }
           })
           this.setState({data:listDetails})        
           this.setState({editing:false})      
        //setUsers(users.map(user => (user.id === id ? updatedUser : user)))
      }

      setEditing = ()=>{
        this.setState({editing:false})
      }

    render(){
        const {editing,data,currentuser}=this.state;
        return(
            <div>
                <h1>CRUD APP</h1>
                <div className="clearfix">
                    <div className="box">
                        {
                            editing?(                               
                                <div>
                                    <h2>Edit user</h2>
                                <EditUser
                                currentuser={currentuser}
                                updateUser={this.updateUser}
                                setEditing={this.setEditing}
                                />
                                </div>
                            ):
                            (
                                <div>
                                    <h2>Add user</h2>
                                    <AddUsers addUser={this.addUser} />

                                </div>
                            )
                        }                        
                    </div>
                    <div>
                    <div className="box">
                    <h2>View users</h2>
                    <UserDetails users={data} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
}