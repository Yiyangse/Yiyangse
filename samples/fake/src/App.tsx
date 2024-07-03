//event 처리 부분
import EventListner from './pages/EventListner';
import OnClick from './pages/OnClick';
import ReactOnClick from './pages/ReactOnClick';
import DispatchEvent from './pages/DispatchEvent';
import StopPropagarion from './pages/StopPropagation';
import VariousInput from './pages/VariousInputs';
import OnChange from './pages/OnChange';
import FileDrop from './pages/FileDrop';
import DragDrop from './pages/DragDrop';
import EventBubbling from './pages/EventBubbling';
import FileInput from './pages/FileInput';

export default function App() {
  return (
    <div>
      <DispatchEvent />
      <DragDrop />
      <EventBubbling />
      <EventListner />
      <FileDrop />
      <FileInput />
      <OnChange />
      <OnClick />
      <ReactOnClick />
      <StopPropagarion />
      <VariousInput />
    </div>
  );
}

// import { Component } from 'react';
// import ClassComponents from './ClassComponent';
// import ArrowComponent from './ArrouwComponent';
// import P from './P';

// const App = () => {
// refactoring map 함수 사용
// [...] map ((item, index)=> <tag>)
// const text = [<p key='1'>hello</p>, <p key='2'>world</p>];
// const texts = ['hello', 'world'].map((item, index) => (
//   <p key={index} children={item} />
// ));
//   const texts = ['hello', 'world'].map((item, index) => (
//     <P key={index} children={item} />
//   ));
//   return <div children={texts} />;
// };
// export default App;

// export default function App() {
//   return <div> Hello function-keyword component!</div>;
// }

// const App = () => {
//   return (
//     <ul>
//       <li>
//         <ClassComponents href='http://www.google.com' text='go to google' />
//         <ArrowComponent href='http://www.x.com' text='go to X(twitter)' />
//       </li>
//     </ul>
//   );
// };
// export default App;

// import { Component } from 'react';
// import ClassComponents from './ClassComponents';
// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponents
//           href='http://www.google.com'
//           text='go to google'
//           age={22}
//           person={{ name: 'Jack', age: 32 }}
//         />
//         <ClassComponents
//           href='http://www.X.com'
//           text='go to x(twitter)'
//           age={22}
//           person={{ name: 'Sue', age: 34 }}
//         />
//       </ul>
//     );
//   }
// }

// return <div>{children}</div>;
// (
//   <div>
//     {/* {isLoading && <p>loading...</p>}
//     {!isLoading && <ul>{children}</ul>} */}
//   </div>
// );

// import * as D from './data';

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height='50' />
//       <img src={D.randomImage()} height='300' />
//     </div>
//   );
// }

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
