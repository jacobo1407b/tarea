import React, { Component } from 'react';
import './App.css';

const stateInicial ={
  d: {
      dato1:0,
      dato2:0,
      suma:0,
      base:0,
      altura:0,
      area:0,
      num1:0,
      num2:0,
      num3:0,
      num4:0,
      num5:0,
      total:0
  },
return: false
}

class App extends Component {
  state={ ...stateInicial}
    handleChange = (e) =>{
        console.log(e.target.name +':' + e.target.value);
   //colocar lo que escribe en el state
   this.setState({
      d :{
          ...this.state.d,
        [e.target.name]: e.target.value
       }
     })
    }
     //envio de formulario
     handleSubmit = e => {
      e.preventDefault();
      //extraer valores state
     const { dato1, dato2} = this.state.d;
     var number1 = parseInt(dato1);
     var number2 = parseInt(dato2);
      //validar campos
     if(dato1=='' || dato2==''){
         this.setState({ 
             error: true
          });
         return;
     }
     var suma;
     suma= number1+number2;
     this.state.d.suma=suma;
  }

  handlearea = e => {
    e.preventDefault();
    //extraer valores state
   const { altura, base} = this.state.d;
   console.log(this.state.d.altura);
   
    //validar campos
   if(altura=='' || base==''){
       this.setState({ 
           error: true
        });
       return;
   }
   var a = parseInt(altura);
   var b = parseInt(base);
   var multi;
   multi=(b*a)/2 ;
   this.state.d.area=multi;
}

handlepromedio = e => {
  e.preventDefault();
  //extraer valores state
 const { num1,num2,num3,num4,num5} = this.state.d;
 console.log(this.state.d);
 
 var a = parseInt(num1);
 var b = parseInt(num2);
 var c = parseInt(num3);
 var d = parseInt(num4);
 var e = parseInt(num5);
 var prom;
 prom=(a+b+c+d+e)/5;
 this.state.d.total=prom;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="col-md-3 p-4">
            
              <div className="card">
                <div className="card-header">
                  <input type="text" className="form-control" name="dato2" value={'La suma es: '+this.state.d.suma} required readonly />
                </div>
                <form onSubmit={this.handleSubmit}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">Calcular</h6>
                  <input type="text" className="form-control" name="dato1" placeholder="Numero 1" onChange={this.handleChange} />
                  <input type="text" className="form-control" name="dato2" placeholder="Numero 2" onChange={this.handleChange}/>
                  <input type="submit" className="btn btn-primary" name="env" />
                </div>
                </form>
              </div>
            
          </div>

          <div className="col-md-3 p-4">
            <form onSubmit={this.handlearea}>
              <div className="card">
                <div className="card-header">
                  <input type="text" className="form-control" name="area" value={'el area es: '+this.state.d.area} required readonly />
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">Calcular</h6>
                  <input type="text" className="form-control" name="base" placeholder="Base" onChange={this.handleChange}/>
                  <input type="text" className="form-control" name="altura" placeholder="Altura" onChange={this.handleChange} />
                  <input type="submit" className="btn btn-primary" name="envenvia" />
                </div>
              </div>
            </form>
          </div>


          <div className="col-md-3 p-4">
            <form onSubmit={this.handlepromedio}>
              <div className="card">
                <div className="card-header">
                  <input type="text" className="form-control" name="area" value={'el promedio es : '+this.state.d.total} required readonly />
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">Calcular</h6>
                  <input type="text" className="form-control" name="num1" placeholder="num1" onChange={this.handleChange}/>
                  <input type="text" className="form-control" name="num2" placeholder="num2" onChange={this.handleChange} />
                  <input type="text" className="form-control" name="num3" placeholder="num3" onChange={this.handleChange} />
                  <input type="text" className="form-control" name="num4" placeholder="num4" onChange={this.handleChange} />
                  <input type="text" className="form-control" name="num5" placeholder="num5" onChange={this.handleChange} />
                  <input type="submit" className="btn btn-primary" name="envenvia" />
                </div>
              </div>
            </form>
          </div>


        </header>
      </div>
    );
  }
}
export default App;
