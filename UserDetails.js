import React from 'react';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
export default class UserDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    } 
    render(){             
        const style={
            fontSize:'20px',
            paddingRight:'15px'
        }
        return(
            <table>
                <thead>
                    <tr>                        
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>                        
                    </tr>
                </thead>
                <tbody>                    
                    {this.props.users.length>0?(
                        this.props.users.map(user=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                            <i className="fa fa-pencil" aria-hidden="true" title={"edit"} 
                               onClick={() => {this.props.editRow(user)}} style={style}></i>
                            <i className="fa fa-trash" aria-hidden="true" title={"delte"}
                               onClick={this.props.deleteUser(user.id)} style={style}></i>                
                            </td>
                        </tr>))
                    ):(
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }    
}