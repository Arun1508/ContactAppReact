import  React, {useState, useEffect}  from 'react';
import ContactForm from './ContactFrom';
import firebaseDb from '../firebase';

const Contacts = () => {

    var [ contactObjs,setContactObjs] = useState({})
    var [ currentId,setCurrentId] = useState('')
    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot=>{
            if (snapshot.val()!=null){
                setContactObjs({
                    ...snapshot.val()
                })
            }
            else{
                setContactObjs({})
            }
        })
    },[])

    const addOrEdit = obj => {

       if ( currentId === '' ) {
            console.log("push data")
            firebaseDb.child('contacts')
            .push(obj)
            .then(console.log("Added"))
            .catch(console.log("error"));
        }  
        else {
            console.log("update data");
            firebaseDb.child(`contacts/${currentId}`)
            .set(obj)
            .then(setCurrentId(''))
            .catch(console.log("error"));
        }
    }
    const onDelete = key => {
        if(window.confirm("Are sure that you want to delete?")){
            firebaseDb.child(`contacts/${key}`)
            .remove()
            .then(setCurrentId(''))
            .catch(console.log("error"))
        }
    }

    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Contact Register</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit, currentId, contactObjs})}/>
                </div>
                <div className="col-md-7">
                    <table className="table table borderless table-stripped">
                        <thead className="theard-light">
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjs).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjs[id].fullName}</td>
                                        <td>{contactObjs[id].mobile}</td>
                                        <td>{contactObjs[id].email}</td>
                                        <td>
                                         
                                            <a  href="#"  onClick={() => {setCurrentId(id)}} className="btn text-primary">
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            
                                            <a href="#" className="btn text-danger">
                                                <i className="far fa-trash-alt" onClick={() => {onDelete(id)}}></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
        
    );
}
 
export default Contacts;