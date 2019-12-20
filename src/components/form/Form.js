import React, { Component } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class Form extends Component {

  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Nombre
    if(!fields["nombre"]){
      formIsValid = false;
      errors["nombre"] = "Este campo se encuentra vacio";
    }

    if(typeof fields["nombre"] !== "undefined"){
      if(!fields["nombre"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["nombre"] = "Solo puede ingresar letras";
      }
    }

    //Apellido
    if(!fields["apellido"]){
      formIsValid = false;
      errors["apellido"] = "Este campo se encuentra vacio";
    }

    if(typeof fields["apellido"] !== "undefined"){
      if(!fields["apellido"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["apellido"] = "Solo puede ingresar letras";
      }
    }

    //Numero
    if(!fields["numero"]){
      formIsValid = false;
      errors["numero"] = "Este campo se encuentra vacio";
    }

    if(typeof fields["numero"] !== "undefined"){
      if(fields["numero"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["numero"] = "Solo puede ingresar números";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado con éxito!'
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: '¡Formulario contiene errores!'
      });
    }

  }

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }

    render() {
      return(
        <div className="container-fluid">
          <div className="col-12 col-lg-9">
            <div className="card ml-0 mb-4 mr-3">
              <h5 className="card-header">Información del formulario</h5>
              <div className="card-body">

                <form onSubmit= {this.contactSubmit.bind(this)}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Nombre <span className="text-danger">*</span></label>
                      <input type="text" ref="nombre" onChange={this.handleChange.bind(this, "nombre")} value={this.state.fields["nombre"]} className="form-control" id="nombre"/>
                      <span style={{color: "red"}}>{this.state.errors["nombre"]}</span>
                    </div>
                    <div className="form-group col-md-6">
                      <label>Apellido <span className="text-danger">*</span></label>
                      <input type="text" ref="apellido" onChange={this.handleChange.bind(this, "apellido")} value={this.state.fields["apellido"]} className="form-control" id="apellido"/>
                      <span style={{color: "red"}}>{this.state.errors["apellido"]}</span>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Seleccione un país <span className="text-danger">*</span></label>
                      <select id="pais" className="form-control"/>
                    </div>

                    <div className="form-group col-md-6">
                      <label>Número de documento <span className="text-danger">*</span></label>
                      <input type="text" ref="numero" onChange={this.handleChange.bind(this, "numero")} value={this.state.fields["numero"]} className="form-control" id="numero"/>
                      <span style={{color: "red"}}>{this.state.errors["numero"]}</span>
                    </div>
                  </div>
                  <button type="submit" value="Submit" className="btn btn-primary mr-3">Enviar</button>
                  <button type="submit" className="btn btn-outline-primary">Cancelar</button>
                </form>
              </div>
            </div>
          </div>


        </div>
      );
    }

}

export default Form;
