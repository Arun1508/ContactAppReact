import  React, { useState, useEffect}   from 'react';

const ContactForm = (props) => {
    const initialFieldValue = {
        fullName: '',
        mobile: '',
        email:'',
        
    }

    var [values, setValues] = useState(initialFieldValue)
    useEffect(() => {
        if(props.currentId === ''){
            setValues({
                ...initialFieldValue
            })
        }
        else{
            setValues({
                ...props.contactObjs[props.currentId]
            })
        }
            
    },[props.currentId, props.contactObjs])
    const handleInputChange = e =>{
        
        var {name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handelFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }
    return (  
        
        <form autoComplete="off" onSubmit={handelFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="from-control" placeholder="full name" name="fullName" 
                    value={values.fullName}
                    onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="from-control" placeholder="mobile" name="mobile" 
                        value={values.mobile}
                        onChange={handleInputChange}
                        />
                </div>
                </div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="from-control" placeholder="Email" name="email" 
                            value={values.email}
                            onChange={handleInputChange}
                            />
                    </div>
                </div>
                <div className="form-control">
                    <input type="submit" value={props.currentId === ''?"Save":"Update"} className="btn btn-primary btn-block" />
                </div>
            </div>
        </form>
        
    );
}
 
export default ContactForm;