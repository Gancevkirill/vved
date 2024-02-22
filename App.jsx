import './App.css';
// 1
// function App() {
//   const  render = <div>текст</div>
//   return (
//     <p>{render}</p>
//   );
// }
// 2
// function App() {
//     const text = <div>текст</div>
//     return (
//       <p>{text}</p>
//     );
//     }
// 3
// function App() {
//   const text = <div><p>текст</p></div>
//   return (
//     <p>{text}</p>
//   );
//   }
// 4
// function App() {
//   const text = 
//   <>
//     <div>
//       <p>текст1</p>
//       <p>!!!</p>
//       <p>текст2</p>
//     </div>
//   </>
// 
//   return (
//     <p>{text}</p>
//   );
//   }
// 5
// function App() {
//   const attr = '2'

//   return (
//     <div>
//       {2}
//       <div id={attr}>Мужские колготки находятся на странице {attr}</div>
//     </div>
//   );
// }
// 6-7
// function App() {
//   const str = '777';
//   const stule = {
//     color: 'green',
//     border: '1px solid green',
//     borderRadius: '30px',
//     padding: '10px', 
//     width: 'fit-content', 
//     margin: '0 auto'
//   };

//   return (
//     <div>
//       {777}
//       <div className={str} style={stule}>здесь написан номер школьного класса со значением {str}</div>
//     </div>
//   );
// }
//8
// function App() {
//   const show = true

//   return (
//     <div>
//       {show ? (
//         <div>Текст 1</div>
//       ) : (
//         <div>Текст 2</div>
//       )}
//     </div>
//   );
// }
// 9
  // function App() {
  //   const arr = ['a', 'b', 'c', 'd', 'e'];

  //   return (
  //     <ul>
  //       {arr.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //   );
  // }
// 10
// function App() {
//   const getNum1 = () => 1;
//   const getNum2 = () => 2;
//   const num1 = getNum1();
//   const num2 = getNum2();
//   const sum = num1 + num2;

//   return (
//     <div>
//       <p>Сумма чисел {num1} и {num2} равна {sum}.</p>
//     </div>
//   );
// }
// 12
// const workers = [
//   { name: 'Иван', surname: 'Иванов', days: 20, rate: 500 },
//   { name: 'Петр', surname: 'Петров', days: 22, rate: 600 },
// ];

// const calculateSalary = (worker) => {
//   return worker.days * worker.rate;
// };

// const calculateTotalSalary = (workers) => {
//   return workers.reduce((total, worker) => {
//     return total + calculateSalary(worker);
//   }, 0);
// };

// const WorkersTable = ({ workers }) => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Имя</th>
//             <th>Фамилия</th>
//             <th>Дни</th>
//             <th>Ставка</th>
//             <th>Зарплата</th>
//           </tr>
//         </thead>
//         <tbody>
//           {workers.map((worker, index) => (
//             <tr key={index}>
//               <td>{worker.name}</td>
//               <td>{worker.surname}</td>
//               <td>{worker.days}</td>
//               <td>{worker.rate}</td>
//               <td>{calculateSalary(worker)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Общая зарплата: {calculateTotalSalary(workers)}</h2>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       <WorkersTable workers={workers} />
//     </div>
//   );
// };


export default App;
