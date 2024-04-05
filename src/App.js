import './App.css';
import Layout from './components/Layout';
import Etudiants from './components/étudiants';
function App() {
  const etudiants= [ {
    prénom: "ilyas",
    nom: "el bakkali",
    année: 1999,
  },
  {
    prénom: "soumaya",
    nom: "el bakkali",
    année: 2001,
  }];
  const style={
    color:'red',background:'green'
  }
  return (
    <Layout>
      <h1>bonjour</h1>
      <Etudiants look={style} data={etudiants} note='17' color='blue'/>
    </Layout>
  );
}

export default App;
