import Card from './components/Card';
import Leo from './Leo.png';
import Mike from './Mike.png';
import Don from './Don.png';
import Ralph from './Ralph.png';
import Logo from './tmntlogo.png';

function App() {
  const turtles = [
    {
      id: '1',
      name: 'Leonardo',
      nickname: 'Leo',
      img: Leo,
      color: '#03a2e6'
    },
    {
      id: '2',
      name: 'Donatello',
      nickname: 'Don',
      img: Don,
      color: '#b196c6'
    },
    {
      id: '3',
      name: 'Raphael',
      nickname: 'Raph',
      img: Ralph,
      color: '#ee3d36'
    },
    {
      id: '4',
      name: 'Michelangelo',
      nickname: 'Mike',
      img: Mike,
      color: '#f89e59'
    },
  ]
  return (
    <div>
      <header className="logo">
        <img src={Logo}/>
      </header>
       <Card turtlesArr = { turtles } />
    </div>
  );
}

export default App;
