"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[939],{1939:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t,o,i,a,s,c,l,d=r(6907),m=r(5861),u=r(4687),f=r.n(u),h=(r(2791),r(6727)),p=r(5705),x=r(168),b=r(7686),g=b.Z.div(t||(t=(0,x.Z)(["\n  width: 30%;\n  margin: 0 auto;\n"]))),v=b.Z.h1(o||(o=(0,x.Z)(["\n  font-size: 3vw;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  display: flex;\n  align-item: center;\n  justify-content: center;\n"]))),Z=b.Z.label(i||(i=(0,x.Z)(["\n  font-weight: bold;\n"]))),j=(0,b.Z)(p.Bc)(a||(a=(0,x.Z)(["\n  color: red;\n  margin-top: 0.3125rem;\n"]))),y=b.Z.button(s||(s=(0,x.Z)(["\n  width: 100%;\n  height: 2.5rem;\n  padding: 0.3125rem 0.46875rem;\n  margin-top: 0.625rem;\n  margin-bottom: 0.5rem;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 0.15625rem;\n  font-size: 1rem;\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),w=b.Z.div(c||(c=(0,x.Z)(["\n  max-width: 18.75rem;\n  display: flex;\n  flex-direction: column;\n"]))),k=b.Z.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.625rem;\n  label {\n    margin-bottom: 0.3125rem;\n    font-size: 1rem;\n  }\n  input {\n    padding: 0.5rem;\n    border: 0.0625rem solid #ccc;\n    border-radius: 0.25rem;\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n\n    &:focus {\n      box-shadow: 0 0 1rem #007bff;\n      outline: none;\n    }\n  }\n  .error {\n    color: red;\n    font-size: 0.875rem;\n    margin-top: 0.3125rem;\n  }\n"]))),N=r(1686),z=r.n(N),C=r(9434),A=r(6361),F=function(n){return n.contacts},_=function(n){return n.filters.filter},q=r(184),P=h.Ry().shape({name:h.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan").required("Name is required"),phone:h.Z_().trim().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Phone number is required")});var K,B,I,J,L,S,E,G=function(){var n=(0,C.I0)(),e=(0,C.v9)(F),r=function(n,r){return!(!e||!Array.isArray(e))&&e.some((function(e){return e.name===n||e.phone===r}))},t=function(){var e=(0,m.Z)(f().mark((function e(t,o){var i,a,s,c,l,d;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.name,a=t.phone,s=r(i,a),c="Contact added successfully!",l="An error occurred while adding the contact.",!s){e.next=7;break}return z().Notify.failure("Contact with the same name or phone number already exists!"),e.abrupt("return");case 7:return e.prev=7,e.next=10,n((0,A.uK)({name:i,number:a}));case 10:d=e.sent,A.uK.fulfilled.match(d)?(o.resetForm(),z().Notify.success(c)):z().Notify.failure(l),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),z().Notify.failure(l);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,q.jsxs)(g,{children:[(0,q.jsx)(v,{children:"Phonebook"}),(0,q.jsx)(p.J9,{initialValues:{name:"",phone:""},validationSchema:P,onSubmit:t,children:(0,q.jsxs)(p.l0,{as:w,children:[(0,q.jsxs)(k,{children:[(0,q.jsx)(Z,{htmlFor:"name",children:"Name"}),(0,q.jsx)(p.gN,{type:"text",id:"name",name:"name"}),(0,q.jsx)(j,{name:"name",component:"div",className:"error"})]}),(0,q.jsxs)(k,{children:[(0,q.jsx)(Z,{htmlFor:"phone",children:"Phone"}),(0,q.jsx)(p.gN,{type:"text",id:"phone",name:"phone"}),(0,q.jsx)(j,{name:"phone",component:"div",className:"error"})]}),(0,q.jsx)(y,{type:"submit",children:"Add Contact"})]})})]})},M=b.Z.ul(K||(K=(0,x.Z)(["\n  width: 30%;\n  list-style: none;\n  padding: 0;\n  margin: 0 auto;\n"]))),R=b.Z.li(B||(B=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n"]))),T=b.Z.div(I||(I=(0,x.Z)(["\n  font-size: 1.5rem;\n  margin-right: 1rem;\n"]))),V=b.Z.div(J||(J=(0,x.Z)(["\n  flex: 1;\n"]))),Y=b.Z.h3(L||(L=(0,x.Z)(["\n  margin: 0;\n  font-size: 1.5vw;\n"]))),$=b.Z.p(S||(S=(0,x.Z)(["\n  margin: 0;\n  font-size: 1vw;\n  color: #666;\n"]))),D=b.Z.button(E||(E=(0,x.Z)(["\n  padding: 0.25rem 0.5rem;\n  background-color: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  margin-left: 0.625rem;\n"]))),H=r(7425),O=r(8820);var Q=function(n){var e=n.id,r=n.name,t=n.phone,o=(0,C.I0)(A.GK),i=function(){var n=(0,m.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o(e);case 3:z().Notify.success("Contact deleted successfully!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),z().Notify.failure("An error occurred while deleting the contact.");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return(0,q.jsxs)(R,{children:[(0,q.jsx)(T,{children:(0,q.jsx)(H.Nwp,{})}),(0,q.jsxs)(V,{children:[(0,q.jsx)(Y,{children:r}),(0,q.jsx)($,{children:t})]}),(0,q.jsx)(D,{onClick:function(){return i(e)},children:(0,q.jsx)(O.YK6,{})})]},e)};var U,W,X,nn=function(){var n=(0,C.v9)(_),e=(0,C.v9)(F);if(console.log(e),!e||!Array.isArray(e)||0===e.length)return null;var r=e.filter((function(e){return"string"===typeof n&&"string"===typeof e.name&&e.name.toLowerCase().includes(n.toLowerCase())}));return null!==r&&void 0!==r&&r.length||z().Notify.info("No contacts found."),(0,q.jsx)(M,{children:r.map((function(n){var e=n.id,r=n.name,t=n.phone;return(0,q.jsx)(Q,{id:e,name:r,phone:t},e)}))})},en=b.Z.div(U||(U=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  // margin-top: 1rem;\n  margin-bottom: 2rem;\n"]))),rn=b.Z.label(W||(W=(0,x.Z)(["\n  margin-top: 0.625rem;\n  font-weight: bold;\n  font-size: 2vw;\n  display: block;\n"]))),tn=b.Z.input(X||(X=(0,x.Z)(["\n  padding: 0.5rem;\n  width: 20%;\n  font-size: 1rem;\n  border: 0.0625rem solid #ccc;\n  border-radius: 0.25rem;\n  margin-top: 0.3125rem;\n\n  &:focus {\n    box-shadow: 0 0 1rem #007bff;\n    outline: none;\n  }\n"]))),on=r(6895);var an=function(){var n=(0,C.I0)(),e=(0,C.v9)(_);return(0,q.jsxs)(en,{children:[(0,q.jsx)(rn,{htmlFor:"filter",children:"Filter contacts:"}),(0,q.jsx)(tn,{type:"text",placeholder:"Enter a name",id:"filter",name:"filter",value:e,onChange:function(e){n((0,on.Tv)(e.target.value.trim()))}})]})};var sn=function(){return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(d.B6,{children:[(0,q.jsx)(d.ql,{children:(0,q.jsx)("title",{children:"Phonebook"})}),(0,q.jsx)(G,{}),(0,q.jsx)("h2",{children:"Contacts"}),(0,q.jsx)(an,{}),(0,q.jsx)(nn,{})]})})}}}]);
//# sourceMappingURL=939.91d20f11.chunk.js.map