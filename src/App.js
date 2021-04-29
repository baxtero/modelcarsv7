import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import "./App.css";

import AddUser from "./components/add-user.component";
import User from "./components/user.component";
import UsersList from "./components/users-list.component";

const TestStuff = () =>{
  return(<Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/users"]} component={UsersList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/users/:id" component={User} />
          </Switch>
        </div>
      </Router>)
}

class App extends Component {
  render() {
    return (
      <div className='app'>
      <AddUser />
      <Header />
      <Main />
      <TestStuff />
      </div>
    );
  }
}

const Home = () => (
  <Index />
);

const About = () => (
  <div className='about'>
    <main className="content page-body-layout" >
      <div></div>
      <div className="cart-bg aboutus">
      <h1>About Us</h1>
      <p>Welcome to Model Cars, your number one source for all car models. We're dedicated to giving you the very best of model cars, with a focus on [store characteristic 1], [store characteristic 2], [store characteristic 3].</p>


<p>Founded in 2021 by O'Brian, Model Cars has come a long way from its beginnings in Minneapolis MN. When O'Brian first started out, his passion for eco-friendly cleaning products drove them to quit his day job, do tons of research, so that Model Cars can offer you a competitive differentiator - e.g. "the world's most advanced toothbrush"]. We now serve customers all over [place - town, country, the world], and are thrilled that we're able to turn our passion into my own website.</p>


<p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      </div>
      <div></div>
    </main>
  </div>
);

function Contact () {
  const [count, setCount] = React.useState("");
  const [details, setDetails] = React.useState("");

  const onChange =(event) =>{
    setDetails(event.target.value);
  }
  React.useEffect(() => {
    document.title = `You clicked ${details} times`;
  });

  return(
  <div className='contact'>
    <main className="content page-body-layout" >
      <div></div>
      <div>
      <div className="grid-half-items">
        <div>
          <section name="form" className="searchFormBody" id="contact-form">
            <h1>Thank You {details}! </h1>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={details}
            onChange={onChange}
          />
          <br />
          <br />
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
          />
          <br />
          <br />
          <label>Email</label>
          <input
            type="email"
            name="email"
          />
          <br />
          <br />
          <label>Message</label>
          <textarea>Your Message
          </textarea>
          <br />
          <br />

          <button onClick={() => setCount(1)}>Submit</button>
        </section>
      </div>

        <div className="searchFormBody width90" >
        <h1>Contact Us</h1>
        <p><b>Address</b><br />
          1010 Happy Rd. Living Town, MN 55555
        </p>
        <p><b>Phone</b><br />
          (123) 555-0000</p>

        <p><b>Email </b><br />
        email@email.com</p>

        <p>You clicked {count} times</p>
        
        <p>email: <strong>email@email.com</strong></p>
        </div>
        
      </div>
     
      </div>
      <div></div>
    </main>
  </div>
  )
};

class Cart extends React.Component{
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  nav = React.createRef();
  
  handleScroll = () => {
    if(window.scrollY === 0)
      document.getElementById("nav").style.backgroundColor = "rgb(0 0 0 / 0%)";
    else 
      document.getElementById("nav").style.backgroundColor = "rgb(0 0 0)";
    ///console.log(window.scrollY + " - " +window.screenTop);
    
  };

  render(){
  return (<div className='cart'>
    <main className="content page-body-layout" >
      <div></div>
      <div>
      <div className="grid-cart">
        <SearchForm />
        <div>
          <CartCarList />
        </div>
        </div>
      </div>
      <div></div>
    </main>
  </div>);
  }
}

const CartCarList = () => {
  var jsonDocData = require('./TopPicks.json');
  var data = JSON.parse(localStorage.getItem('modelCarCart'));

  if(data.length < 1){
    return(<section name="top-picks">
    <div className="top-picks-header">Your Cart Items</div>
    <div className="cart-bg">
    <div className="emptyCart">Your cart is empty!</div>
    </div>
</section>)
  } else {

  
  const item = [];
  var idFound = false;
  var idCount = 0;
  var id = null;

  for (var i = 0; i < data.length; i++)
  {
    for (var j = 0; j < jsonDocData.length; j++)
    {
      if(data[i]["id"] == jsonDocData[j]["id"]){
          var obj = jsonDocData[j];
          item.push(<CarInCart id={obj.id} img={obj.img} name={obj.name} ftype={obj.ftype} ctype={obj.ctype} hp={obj.hp} price={obj.price} color={obj.color} qty={data[i].qty} />);
      }
    }
  }

    return (
      <section name="top-picks">
          <div className="top-picks-header">Your Cart Items</div>
          <div className="cart-bg">
          {item}
          </div>
      </section>
    ) 
  }
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/cart' component={Cart}></Route>
  </Switch>
);


class Index extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  nav = React.createRef();
  
  handleScroll = () => {
    if(window.scrollY === 0)
      document.getElementById("nav").style.backgroundColor = "rgb(0 0 0 / 0%)";
    else 
      document.getElementById("nav").style.backgroundColor = "rgb(0 0 0)";
    ///console.log(window.scrollY + " - " +window.screenTop);
    
  };
  
  render(){
    
    return (
      <Content />
    );
  }
}

class GetCartCount extends React.Component{
  componentWillUpdate(nextProps, nextState) {
    if (nextState.open == true && this.state.open == false) {
      this.props.onWillOpen();
    }
  }

  render(){
    var carDatajsonObj = JSON.parse(localStorage.getItem('modelCarCart'));
    var count = 0;

      if(!carDatajsonObj){
      return 0
    } else {
      for(var i=0; i<carDatajsonObj.length; i++){
        count += carDatajsonObj[i]["qty"];
      }
      return count;
    }
  }
}

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showLogin = ()=> {
    document.getElementById("login-signup").classList.remove("hide");
    var divs = document.querySelectorAll('.signup-form');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('hide');
    }
  }

  const showSignUp = () =>{
    document.getElementById("login-signup").classList.remove("hide");
    var divs = document.querySelectorAll('.signup-form');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('hide');
    }
  }

  

  return (
    <div id="nav" className="header scrolled navbar">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <div className="menu-icon">
              <img src="img/close.png"></img>
          </div>
        ) : (
          <div className="menu-icon">
              <img src="img/menu.png"></img>
          </div>
        )}
      </div>
      <div className="logo-nav">
        <div className="logo-container">
          <NavLink to='/'>
          <img src="/img/logo.png"></img>
          </NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/about'>About Us</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/contact'>Contact Us</NavLink>
          </li>
        
          <li className="option mobile-option" onClick={showLogin}>
            <a href="#">Login</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
            Sign Up
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={showLogin}>
          <a href="#">Login </a>
        </li>
        <li className="signup-btn" onClick={showSignUp}>
          <a href="#">
            Sign Up
          </a>
        </li>
      </ul>
      
      <ul>    
      <li className="my-cart" onClick={closeMobileMenu}>
            <a href="" >
            <NavLink to='/cart'>Cart(<GetCartCount />)</NavLink><div className="new-feature">New!</div>
            </a>
          </li>
      </ul>      
    </div>
  );
};


class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      click: ''
    }
  }

  render(){
  return(
    <main className="content page-body-layout" >
      <div></div>
      <div>
        <HomeSearch />
        <Parent />
        <TopPicksCars />
      </div>
      <div></div>
    </main>
  )
}
}

const HomeSearch = () =>{
  return<div className="grid-header">
    <SearchForm />
    <CarName />
  </div>
}

const CarName = () =>{
  return<div className="header-item carlabel">
  <span id="car-label">
      <br />
      <br />
      <br /><strong>Devel</strong><span> SIXTEEN</span>
      <br />
      <i> ---Top SPEED</i></span> 
  <br /> 347 mph | 550kmh
  </div>
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      year: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let year = this.state.year;
    if (!Number(year)) {
      alert("Hello");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
          <div id="searchForm" className="float-left text-align-left round-edges header-item"><h3>Find the perfect Model.</h3>
            <div id="searchFormBody" className="round-edges">
            <h1 className="hide">Hello {this.state.username} {this.state.year}</h1>
            <label>Make:</label>
            <input
                type='text'
                name='username'
                onChange={this.myChangeHandler}
            />
            <br/>
            <br/>

            <label>Model:</label>
            <input
                type='text'
                name='model'
                onChange={this.myChangeHandler}
            />
            <br/>
            <br/>

            <label>Year:</label>
            <input
                type='text'
                name='year'
                onChange={this.myChangeHandler}
            />
            <br/>
            <br/>

            <label>Price Range:</label>
            <input
                type='text'
                name='price'
                onChange={this.myChangeHandler}
            />

            <br/>
            <br/>
            <button onClick={this.mySubmitHandler} className="pointer">SUBMIT</button>
            </div>
        </div>
    );
  }
}

class Parent extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          qty: 1,
          color:'White',
          close: "hide",
          data:'',
      }
  }

  componentWillReceiveProps = (nextProps)=> {
    console.log(nextProps);
    /* Load new data when the dataSource property changes.
    if (nextProps.dataSource != this.props.dataSource) {
      this.loadData(nextProps.dataSource);
    }*/
  }

  formtochild = (params) =>{
      this.setState({ data : params })
    }

    
  handleCallbackQty = (childData) =>{
      this.setState({data: childData})
  }

  closePreview = () => { 
      window.location.replace('/');
      };

  showColorPicker = () =>{
      this.setState({close:"block"});
  }

  changeColor = (event) =>{
      this.setState({color: event.target.id});
      this.hideColorPicker();
  }

  hideColorPicker = () =>{
      this.setState({close:"hide"});
  }

  render(){
      const {qty} = this.state;
      
      const query =  window.location.search;
      var id = (new URLSearchParams(query)).get("id");
      
      var data = require('./TopPicks.json');
      var item = null;
      
      for (var i = 0; i < data.length; i++)
      {
          if(id == data[i].id){
              item = data[i];
          }
          //item.push(<Car id={obj.id} img={obj.img} name={obj.name} ftype={obj.ftype} ctype={obj.ctype} hp={obj.hp} price={obj.price} color={obj.color} />);
      }
      console.log(item);
      
      if(parseInt(id) > 0) {
      return(
          <div className={`overlay ${parseInt(id) > 0? `` : `hide` }`}>
              <quickview>
              <div className="float-right"><i className="fas fa-times-circle close pointer" onClick={this.closePreview}></i></div>
                  <div className="quick-view">
                      <div className="car-title">{item.name}</div>
                      <div className="car-img"><img src={item.img} width="100%" alt={item.name} /></div>
                      <div className="cart-area">
                          <div className={`colorpicker ${this.state.close}`}>
                              <div className='color car-color' id="red" onClick={this.changeColor}></div>
                              <div className='color car-color' id="blue" onClick={this.changeColor}></div>
                              <div className='color color car-color' id="yellow" onClick={this.changeColor}></div>
                              <div className='color car-color' id="white" onClick={this.changeColor}></div>
                              <div className='color car-color' id="black" onClick={this.changeColor}></div>
                          </div>
                          <p>Price: {item.price}</p>
                          <p>Select Color: <div className='color car-color' id={this.state.color} onClick={this.showColorPicker}></div> {this.state.color}</p>
                          
                      <p><Qty qtyParentCallBack = {this.handleCallbackQty}/>{/*qty*/}</p>
                      <p><Color color={this.state.color} colorParentCallBack = {this.handleCallbackColor} /></p>
                      
                      <p><CartItems qty={this.state.data} /></p>
                      <br />
                      <AddCart qty={this.state.data} callback={this.formtochild}/>
                      <NavLink  to='/cart'><ViewCart /></NavLink>
                          <br />
              </div>  
              <div className="car-desc"><br /><strong>{item.name} / {item.ftype} / {item.ctype} / {item.hp}</strong><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </div>
                  <div className="hide">Quickview {id}</div>
              </div>
              </quickview>
          </div>
      )
      }else{
          return(<div></div>)
      }
  }
}

class Qty extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          data: this.props.data
      }
  }

  qtyChange =(event) =>{
      this.props.qtyParentCallBack(event.target.value);
  }

  render(){
      return(
      <div>
          Select Qty:  <select name="qty" id="qty" onChange={this.qtyChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
      </div>
      )
  }
}

class Color extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          data: this.props.color
      }
  }

  colorChange = () =>{
    console.log("color");
  }
  render(){
      return(
          <div className="hide">Color:  <div className="color car-color" id={this.props.color} onChange={this.colorChange}></div> 
          </div>
      )
  }
}

class AddCart extends React.Component{
  constructor(props){
      super(props);
      
  }
  getContent = () =>{
    var query =  window.location.search;
    var carDatajsonObj = [];
    var qty = this.props.qty.replace(" Item(s) added to Cart", "") < 1 ? 1 : parseInt(this.props.qty);
    var modelCarCart = localStorage.getItem('modelCarCart');

    var item = {}
    item ["id"] = (new URLSearchParams(query)).get("id");
    item ["color"] = this.props.color;
    item['qty'] = qty;

    if(modelCarCart != null){
      carDatajsonObj = JSON.parse(modelCarCart);
    }



    for(var i=0; i <carDatajsonObj.length; i++){
      if(carDatajsonObj[i].id == item["id"]){
        item["qty"] = parseInt(carDatajsonObj[i].qty) + parseInt(item["qty"]);
        carDatajsonObj.splice(i, 1);
      }
     
    }

    carDatajsonObj.push(item);
    localStorage.setItem('modelCarCart', JSON.stringify(carDatajsonObj));


      this.props.callback(qty + " Item(s) added to Cart");
      //this.props.callback(this.props.qty, this.props.id, this.props.color);
  }
  
  render(){
      return(<div><div className="new-feature add-button-new">New!</div>
          <button id="add" onClick={this.getContent}>Add to cart</button>
          </div>
      )
  }
}

function ViewCart(){
  return <div>
    <div className="new-feature add-button-new">New!</div>
    <button id="view-cart" >View cart</button>
    </div>
}

class CartItems extends React.Component{
  constructor(props){
      super(props);
  }

  render(){
      return(
          <label className='tile-cart-button' id="add">{this.props.qty}</label>
      )
  }
}


const TopPicksCars = () => {

  function ListItem(props) {
      return <li className="cart-list">
          {props.value}</li>;
  }

  function ItemList(props) {
      const item = props.item;
      return (
      <ul className="grid-cart-items">
          {item.map((number) =>
          <ListItem key={number}
                      value={number} />
          )}
      </ul>
      );
  }
  
  
  var data = require('./TopPicks.json');
  const item = [];
  for (var i = 0; i < data.length; i++)
  {
      var obj = data[i];
      item.push(<Car id={obj.id} img={obj.img} name={obj.name} ftype={obj.ftype} ctype={obj.ctype} hp={obj.hp} price={obj.price} color={obj.color} />);
  }

    return (
      <section name="top-picks">
          <div className="top-picks-header">Top Picks</div>
          <div className="cart-bg">
          <ItemList item={item} />
          </div>
      </section>
  )
}

class Car extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          color: this.props.color,
          close: "hide",
          img: this.props.img,
          added: ""
      };
  }

  showColorPicker = () =>{
      this.setState({close:"block"});
  }

  hideColorPicker = () =>{
      this.setState({close:"hide"});
  }

  changeColor = (event) =>{
      this.setState({color: event.target.id});
      this.hideColorPicker();
  }

  showPreview = (event) =>{
      window.location.replace('?id=' + event.target.id.split("_")[1]);
  }

  AddToCart = async (event) =>{
      var item = {}
      item ["id"] = event.target.id.split("_")[1];;
      item ["color"] = this.state.color;
      item['qty'] = 1;
  
      var modelCarCart = JSON.parse(localStorage.getItem('modelCarCart'));

      for(var i=0; i <modelCarCart.length; i++){
        if(modelCarCart[i].id == item["id"]){
          item["qty"] = parseInt(modelCarCart[i].qty) + parseInt(item["qty"]);
          modelCarCart.splice(i, 1);
        }
       
      }
  
      modelCarCart.push(item);
      localStorage.setItem('modelCarCart', JSON.stringify(modelCarCart));
      this.setState({added: "Item Was added"});

      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      window.location.reload(false);

  }

  render(){
  return <span>
      <colorpicker className={this.state.close}>
          <div className='color color car-color' id="red" onClick={this.changeColor}></div>
          <div className='color car-color' id="blue" onClick={this.changeColor}></div>
          <div className='color car-color' id="yellow" onClick={this.changeColor}></div>
          <div className='color car-color' id="white" onClick={this.changeColor}></div>
          <div className='color car-color' id="black" onClick={this.changeColor}></div>
      </colorpicker>

      <img className="pointer" src={this.state.img} alt={this.props.name} width="100%" id={`car_${this.props.id}`} onClick={this.showPreview}/>
          <br />Color Picker: <div className='color car-color' id={this.state.color} onClick={this.showColorPicker}></div> 
          <carname>{this.state.color}</carname>
          <br /><strong>{this.props.name}</strong>
          <br />{this.props.ftype} - {this.props.ctype}
          <br />{this.props.hp}<br />
          <br /><price>{this.props.price}</price>
          <hr />
          {this.state.added}<br />
          <div className="new-feature add-button-new">New!</div>
          <button className='tile-cart-button' id={`add_${this.props.id}`} onClick={this.AddToCart}>Add to cart</button>
          <button className='tile-cart-button' id={`view_${this.props.id}`} onClick={this.showPreview}>View more</button>
      </span>;
  }
}

class CarInCart extends React.Component {
  constructor(props){
      super(props);
      console.clear();
      this.state = {
          color: this.props.color,
          close: "hide",
          img: this.props.img,
          data: "",
          showItem: ""
      };

      this.removeItem = this.removeItem.bind(this)
  }

  removeItem = async (event) => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    this.setState({data:"-- - ----Removing Item-- - ----"});;
    await delay(1000);
    this.setState({showItem:"hide"});

    var modelCarCart = JSON.parse(localStorage.getItem('modelCarCart'));

    for(var i=0; i < modelCarCart.length; i++){
      if(modelCarCart[i].id == event.target.id.split("_")[1]){
        modelCarCart.splice(i, 1);
      }
    }

    localStorage.setItem('modelCarCart', JSON.stringify(modelCarCart));
    window.location.reload(false);

 }

  showColorPicker = () =>{
      this.setState({close:"block"});
  }

  hideColorPicker = () =>{
      this.setState({close:"hide"});
  }

  changeColor = (event) =>{
      this.setState({color: event.target.id});
      this.hideColorPicker();
  }

  showPreview = (event) =>{
      window.location.replace('../?id=' + event.target.id.split("_")[1]);
  }

  render(){
  return <div className={`grid-cart ${this.state.showItem}`}>
         <img className="pointer" src={this.state.img} alt={this.props.name} width="100%" id={`car_${this.props.id}`} onClick={this.showPreview}/>

      <div>
      <colorpicker className={this.state.close}>
              <div className='color color car-color' id="red" onClick={this.changeColor}></div>
              <div className='color car-color' id="blue" onClick={this.changeColor}></div>
              <div className='color car-color' id="yellow" onClick={this.changeColor}></div>
              <div className='color car-color' id="white" onClick={this.changeColor}></div>
              <div className='color car-color' id="black" onClick={this.changeColor}></div>
          </colorpicker>
          
          <p><strong>{this.props.name}</strong></p>
          Color Picker: <div className='color car-color' id={this.state.color} onClick={this.showColorPicker}></div> 
          <carname>{this.state.color}</carname>
          
          
          <br />{this.props.ftype} - {this.props.ctype}
          <br />{this.props.hp}<br />
          <br /><price>{this.props.price}</price>
          <hr />
      </div>
      <div>
          <p><b>Quantity: {this.props.qty}</b></p>

          <MountNotification message = {this.state.data} />
          <div className="new-feature add-button-new">New!</div>
          <button className='' id={`delete_${this.props.id}`} onClick = {this.removeItem}>Delete from cart</button>
          <button className='' id={`view_${this.props.id}`} onClick={this.showPreview}>View more</button>
          </div>
    </div>;
  }
}

class MountNotification extends React.Component {

  componentWillMount() {
     console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
     console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {    
     console.log('Component WILL RECIEVE PROPS!', newProps)
  }

  shouldComponentUpdate(newProps, newState) {
    //console.log(newProps, newProps.myNumber <= 10)
     return newProps.message;// <= 10;
  }

  componentWillUpdate(nextProps, nextState) {
     console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
     console.log('Component DID UPDATE!', prevProps, prevState)
  }

  componentWillUnmount() {
     console.log('Component WILL UNMOUNT!')
  }
 
  render() {
     return (
        <div>{this.props.message}</div>
     );
  }
}

export default App;