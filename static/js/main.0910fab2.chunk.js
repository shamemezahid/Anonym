(this.webpackJsonpanonym=this.webpackJsonpanonym||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/sad.12604aae.jpg"},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),l=a.n(r),i=(a(27),a(4)),c=a(5),o=a(1),m=a(7),u=a(6),h=(a(28),a(11));var p=function(){return s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper container"},s.a.createElement(h.a,{to:"/"},s.a.createElement("span",{className:"brand-logo right"},s.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/like-message.png",alt:"Anonym",style:{height:"50%",width:"50%"}}))),s.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"})))},d="https://rahathossain690.github.io/Anonym/",g="https://anonym-rahat.herokuapp.com/api",E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).toogle_active=function(){fetch(g+"/toggle",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log(e),e.ok?n.setState({is_active:!n.state.is_active}):n.setState({is_active:n.state.is_active})}))};var s=null,r=null,l=null,c=null,m=null;return n.state={sharable_url:d+s,facebook_share_url:"https://www.facebook.com/sharer.php?u="+d+s,twitter_share_url:"https://twitter.com/share?url="+d+s,linkedin_share_url:"https://www.linkedin.com/shareArticle?mini=true&amp;url="+d+s,whatsapp_share_url:"https://api.whatsapp.com/send?text="+d+s,mail_share_url:"mailto:?&amp;body="+d+s,username:s,email:r,date_of_creation:l,is_active:c,total_message:m,loading:!0},n.toogle_active=n.toogle_active.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(g+"/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({sharable_url:d+t.username,facebook_share_url:"https://www.facebook.com/sharer.php?u="+d+t.username,twitter_share_url:"https://twitter.com/share?url="+d+t.username,linkedin_share_url:"https://www.linkedin.com/shareArticle?mini=true&amp;url="+d+t.username,whatsapp_share_url:"https://api.whatsapp.com/send?text="+d+t.username,mail_share_url:"mailto:?&amp;body="+d+t.username,username:t.username,email:t.email,date_of_creation:t.date_of_creation.substring(0,10),is_active:t.is_active,total_message:t.total_message,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,!this.state.username&&s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("h1",null,"Anonym"),s.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/like-message.png",alt:"Anonym"}),s.a.createElement("h4",null,"Safe, Secure, Special"),s.a.createElement("h6",null,s.a.createElement(h.a,{to:"/Anonym/signin"},s.a.createElement("span",{className:"btn waves-effect waves-light"},"Signin"))," or ",s.a.createElement(h.a,{to:"/Anonym/signup"},s.a.createElement("span",{className:"waves-effect waves-light btn"},"Signup")),s.a.createElement("br",null),s.a.createElement("br",null)," Give it a try!"),!0===this.state.loading&&s.a.createElement("div",{className:"preloader-wrapper active"},s.a.createElement("div",{className:"spinner-layer spinner-red-only"},s.a.createElement("div",{className:"circle-clipper left"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"gap-patch"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"circle-clipper right"},s.a.createElement("div",{className:"circle"})))))," ",this.state.username&&s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("h3",null,this.state.username),s.a.createElement("div",{className:"container",style:{alignSelf:"center",alignContent:"center",textAlign:"center",padding:"10px 10px"}},s.a.createElement("blockquote",null,s.a.createElement("pre",null,s.a.createElement("code",{style:{backgroundColor:"#2d2d2d",color:"white",padding:"10px 10px"}},this.state.sharable_url))),s.a.createElement("h6",{style:{textAlign:"center"}},"Share Link"),s.a.createElement("br",null),s.a.createElement("a",{className:"share-btn pinterest",onClick:function(){return navigator.clipboard.writeText(e.state.sharable_url)}},"Copy"),s.a.createElement("a",{className:"share-btn facebook",href:this.state.facebook_share_url,target:"_blank",rel:"noopener noreferrer","data-placement":"top","data-title":"Facebook","data-toggle":"tooltip",title:"","data-original-title":"Facebook"},"Facebook"),s.a.createElement("a",{className:"share-btn twitter",href:this.state.twitter_share_url,target:"_blank",rel:"noopener noreferrer","data-placement":"top","data-title":"Twitter","data-toggle":"tooltip",title:"","data-original-title":"Twitter"},"Twitter"),s.a.createElement("a",{className:"share-btn linkedin",href:this.state.linkedin_share_url,target:"_blank",rel:"noopener noreferrer","data-placement":"top","data-title":"LinkedIn","data-toggle":"tooltip",title:"","data-original-title":"LinkedIn"},"LinkedIn"),s.a.createElement("a",{className:"share-btn whatsapp",href:this.state.whatsapp_share_url,target:"_blank",rel:"noopener noreferrer","data-placement":"top","data-title":"Whatsapp","data-toggle":"tooltip",title:"","data-original-title":"Whatsapp"},"Whatsapp"),s.a.createElement("a",{className:"share-btn email",href:this.state.mail_share_url,target:"_self"},"Email")),s.a.createElement("br",null),s.a.createElement("div",{className:"switch"},s.a.createElement("label",null,"Get message",this.state.is_active?s.a.createElement("input",{type:"checkbox",checked:!0,onChange:this.toogle_active}):s.a.createElement("input",{type:"checkbox",onChange:this.toogle_active}),s.a.createElement("span",{className:"lever"}))),s.a.createElement("table",{className:"centered"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Email"),s.a.createElement("td",null,this.state.email)),s.a.createElement("tr",null,s.a.createElement("td",null,"Created @"),s.a.createElement("td",null,this.state.date_of_creation)),s.a.createElement("tr",null,s.a.createElement("td",null,"Message"),s.a.createElement("td",null,this.state.total_message)))),s.a.createElement("br",null),s.a.createElement(h.a,{to:"/Anonym/message"},s.a.createElement("span",{className:"btn",style:{margin:"10px 10px"}},"Message")),s.a.createElement(h.a,{to:"/Anonym/signout"},s.a.createElement("span",{className:"btn",style:{margin:"10px 10px"}},"Signout"))))}}]),a}(s.a.Component);var v=a(8),b=Object(v.a)(),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,username:"",email:"",pass:"",cpass:""},n.setUsername=n.setUsername.bind(Object(o.a)(n)),n.setEmail=n.setEmail.bind(Object(o.a)(n)),n.setPassword=n.setPassword.bind(Object(o.a)(n)),n.setCpass=n.setCpass.bind(Object(o.a)(n)),n.signup=n.signup.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"setUsername",value:function(e){this.setState({username:e.target.value,error:null})}},{key:"setEmail",value:function(e){this.setState({email:e.target.value,error:null})}},{key:"setPassword",value:function(e){this.setState({pass:e.target.value,error:null})}},{key:"setCpass",value:function(e){this.setState({cpass:e.target.value,error:null})}},{key:"signup",value:function(){var e=this;if(this.state.pass==this.state.cpass){var t={username:this.state.username,email:this.state.email,password:this.state.pass};console.log(JSON.stringify(t)),fetch("https://anonym-rahat.herokuapp.com/api/signup",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.invalid?e.setState({error:t.invalid}):(b.push("/Anonym/"),console.log("logged in"))})).catch((function(t){console.log(t),e.setState({error:"Error encountered"})}))}else this.setState({error:"passwords don't match"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("h1",null,"Signup"),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},s.a.createElement("div",{className:"input-field inline"},s.a.createElement("input",{id:"username_inline",type:"email",value:this.state.username,className:"validate",onChange:this.setUsername}),s.a.createElement("label",{htmlFor:"username_inline"},"Username")),s.a.createElement("br",null),s.a.createElement("div",{className:"input-field inline"},s.a.createElement("input",{id:"email_inline",type:"email",value:this.state.email,className:"validate",onChange:this.setEmail}),s.a.createElement("label",{htmlFor:"email_inline"},"Email")),s.a.createElement("br",null),s.a.createElement("div",{className:"input-field inline"},s.a.createElement("input",{id:"pass_inline",type:"password",className:"validate",value:this.state.pass,onChange:this.setPassword}),s.a.createElement("label",{htmlFor:"pass_inline"},"Password")),s.a.createElement("br",null),s.a.createElement("div",{className:"input-field inline"},s.a.createElement("input",{id:"cpass_inline",type:"password",className:"validate",value:this.state.cpass,onChange:this.setCpass}),s.a.createElement("label",{htmlFor:"cpass_inline"},"Confirm password")),s.a.createElement("br",null),s.a.createElement("span",{className:"btn",onClick:this.signup},"Sign up"),s.a.createElement("br",null),this.state.error&&s.a.createElement("h6",{className:"red-text"},this.state.error)))}}]),a}(s.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,username:"",email:"",pass:"",cpass:"",loading:!1},n.setEmail=n.setEmail.bind(Object(o.a)(n)),n.setPassword=n.setPassword.bind(Object(o.a)(n)),n.signin=n.signin.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"setEmail",value:function(e){this.setState({email:e.target.value})}},{key:"setPassword",value:function(e){this.setState({pass:e.target.value})}},{key:"signin",value:function(){var e=this;this.setState({loading:!0});var t={email:this.state.email,password:this.state.pass};fetch("https://anonym-rahat.herokuapp.com/api/signin",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1}),t.invalid&&e.setState({error:t.invalid}),t.no?e.setState({error:"invalid credentials"}):(e.setState({loading:!1}),b.push("/Anonym/"))})).catch((function(t){e.setState({loading:!1}),e.setState({error:"Error encountered"})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("h1",null,"Signin"),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},s.a.createElement("div",{className:"input-field inline"},s.a.createElement("input",{id:"email_inline",type:"email",value:this.state.email,className:"validate",onChange:this.setEmail}),s.a.createElement("label",{htmlFor:"email_inline"},"Email")),s.a.createElement("br",null),s.a.createElement("div",{className:"input-field inline"},s.a.createElement("input",{id:"pass_inline",type:"password",className:"validate",value:this.state.pass,onChange:this.setPassword}),s.a.createElement("label",{htmlFor:"pass_inline"},"Password")),s.a.createElement("br",null),s.a.createElement("span",{className:"btn",onClick:this.signin},"Sign in"),s.a.createElement("br",null),this.state.error&&s.a.createElement("h6",{className:"red-text"},this.state.error),this.state.loading&&s.a.createElement("div",{className:"preloader-wrapper small active"},s.a.createElement("div",{className:"spinner-layer spinner-green-only"},s.a.createElement("div",{className:"circle-clipper left"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"gap-patch"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"circle-clipper right"},s.a.createElement("div",{className:"circle"}))))))}}]),a}(s.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://anonym-rahat.herokuapp.com/api/signout",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.ok&&(e.props.setUser(null),b.push("/Anonym/"))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",null)}}]),a}(s.a.Component),w=a(2),_=a(21),N=a.n(_),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={char:0,exists:!0,sent:!1,body:"",error:null},n.setBody=n.setBody.bind(Object(o.a)(n)),n.sendMessage=n.sendMessage.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://anonym-rahat.herokuapp.com/api/"+this.props.match.params.username+"/exists",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({exists:t.exists})})).catch((function(e){console.log(e)}))}},{key:"setBody",value:function(e){e.target.value.length>200&&(e.target.value=e.target.value.substring(0,200)),this.setState({char:e.target.value.length,body:e.target.value,sent:!1,error:null})}},{key:"sendMessage",value:function(){var e=this,t={body:this.state.body};fetch("https://anonym-rahat.herokuapp.com/api/"+this.props.match.params.username+"/message",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.ok&&e.setState({sent:!0}),t.invalid&&e.setState({error:t.invalid})})).catch((function(t){e.setState({error:"error encountered"})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container",style:{padding:"10px 10px",textAlign:"center"}},this.state.exists&&s.a.createElement("div",null,s.a.createElement("h3",null,"Send message to ",this.props.match.params.username),s.a.createElement("i",null,this.state.char,"/200"),s.a.createElement("textarea",{placeholder:"write something",value:this.state.body,style:{height:"200px",margin:"10px 10px",padding:"20px 20px"},onChange:this.setBody}),s.a.createElement("span",{className:"btn",onClick:this.sendMessage},this.state.sent?"sent!":"send"),s.a.createElement("br",null),this.state.error&&s.a.createElement("b",{className:"red-text"},this.state.error),s.a.createElement("br",null),s.a.createElement("h6",null,"Let's take a moment and appreciate our near and dear ones."),s.a.createElement("br",null)),!this.state.exists&&s.a.createElement("div",null,s.a.createElement("h3",null,"Anonym is sad"),s.a.createElement("img",{src:N.a,style:{width:"100%"}}),s.a.createElement("h6",null,"This page doesn't exist or the owner is not expecting any message now!")),s.a.createElement("br",null),s.a.createElement(h.a,{to:"/Anonym/"},s.a.createElement("span",{className:"btn"},"Main Page")))}}]),a}(s.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loading:!0,page:1,array:[]},n.goBackward=n.goBackward.bind(Object(o.a)(n)),n.goForward=n.goForward.bind(Object(o.a)(n)),n.getMessage=n.getMessage.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.getMessage()}},{key:"goForward",value:function(){var e=this;0==this.state.array.length||this.state.loading||this.setState({page:this.state.page+1,loading:!0},(function(){return e.getMessage()}))}},{key:"goBackward",value:function(){var e=this;1==this.state.page||this.state.loading||this.setState({page:this.state.page-1,loading:!0},(function(){return e.getMessage()}))}},{key:"getMessage",value:function(){var e=this;console.log("https://anonym-rahat.herokuapp.com/api/message/"+this.state.page),fetch("https://anonym-rahat.herokuapp.com/api/message/"+this.state.page,{method:"GET",credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){t.ok?b.push("/Anonym/"):(e.setState({array:t,loading:!1}),console.log(e.state))})).catch((function(e){console.log("uiuiui",e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container",style:{padding:"10px 10px",textAlign:"center"}},s.a.createElement("h3",null,"Message"),s.a.createElement("div",{style:{margin:"20px 20px"}},s.a.createElement("span",{className:"btn",onClick:this.goBackward},"\u2190"),s.a.createElement("input",{style:{width:"40px",textAlign:"center",margin:"0px 10px"},disabled:!0,value:this.state.page}),s.a.createElement("span",{className:"btn",onClick:this.goForward},"\u2192")),this.state.loading&&s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"indeterminate"})),Array.from(this.state.array).map((function(e){return s.a.createElement("div",{className:"container red accent-2",style:{padding:"20px 20px",marginTop:"10px",borderRadius:"5px",color:"white",border:"2px solid black"}},s.a.createElement("h6",null,e.body),s.a.createElement("b",null,"- ",e.date.substring(0,10)," ",e.date.substring(11,19)))})),0==this.state.array.length&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"This page is seemingly empty!"),s.a.createElement("div",{className:"container red accent-4",style:{padding:"20px 20px",marginTop:"10px",borderRadius:"5px",color:"white",border:"2px solid black"}},s.a.createElement("h6",null,"Lots of love and affection for you! Have a nice day!"),s.a.createElement("b",null," - Anonym!"))),s.a.createElement("br",null),s.a.createElement(h.a,{to:"/Anonym/"},s.a.createElement("span",{className:"btn"},"Main Page")))}}]),a}(s.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={user:null},e.setUser=e.setUser.bind(Object(o.a)(e)),e.getUser=e.getUser.bind(Object(o.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"setUser",value:function(e){this.setState({user:e})}},{key:"getUser",value:function(){var e=this;fetch("https://anonym-rahat.herokuapp.com/api/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setUser(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return s.a.createElement(w.b,{history:b},s.a.createElement(p,null),s.a.createElement(w.c,null,s.a.createElement(w.a,{path:"/Anonym/",component:function(){return s.a.createElement(E,{user:e.state.user,setUser:e.setUser})},exact:!0}),s.a.createElement(w.a,{path:"/Anonym/signup",component:function(){return s.a.createElement(f,{setUser:e.setUser})}}),s.a.createElement(w.a,{path:"/Anonym/signin",component:function(){return s.a.createElement(y,{setUser:e.setUser})}}),s.a.createElement(w.a,{path:"/Anonym/signout",component:function(){return s.a.createElement(k,{setUser:e.setUser})}}),s.a.createElement(w.a,{path:"/Anonym/message",component:x}),s.a.createElement(w.a,{path:"/Anonym/:username",component:j})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0910fab2.chunk.js.map