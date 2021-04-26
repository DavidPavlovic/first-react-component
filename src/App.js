import Leo from './Leo.png';
import Mike from './Mike.png';
import Don from './Don.png';
import Ralph from './Ralph.png';
import Logo from './tmntlogo.png';
import Turtle from './components/turtle/Turtle';

function App() {
  const turtles = [
    {
      id: '1',
      name: 'Leonardo',
      nickname: 'Leo',
      img: Leo,
      color: '#03a2e6',
      desc: 'Leonardo (Leo) – The tactical, level-headed, quiet, courageous leader and devoted student of his sensei, Leonardo wears a blue mask and wields two swords. As the most conscientious of the four, he often bears the burden of responsibility for his brothers, which commonly leads to conflict with Raphael. Leonardo was named after the Italian polymath, painter, engineer, inventor, writer, anatomist, and sculptor, Leonardo da Vinci.'
    },
    {
      id: '2',
      name: 'Donatello',
      nickname: 'Don',
      img: Don,
      color: '#b196c6',
      desc: 'Donatello (Donnie or Don) – The scientist, inventor, engineer, and technological genius, Donatello wears a purple mask and wields a bo staff. Donatello is a calm turtle, preferring to use his knowledge to solve conflicts, but never hesitates to defend his brothers. He is named after the early Renaissance Italian artist and sculptor from Florence, Donatello.'
    },
    {
      id: '3',
      name: 'Raphael',
      nickname: 'Raph',
      img: Ralph,
      color: '#ee3d36',
      desc: 'Raphael (Raph) – The team\'s antihero, Raphael wears a red mask and wields a pair of sai. He has an aggressive nature, and seldom hesitates to throw the first punch. He is often depicted with a New York accent. His personality can be fierce and sarcastic, and he oftentimes delivers deadpan humor. He is intensely loyal to his brothers and sensei. He is named after the Italian painter and architect of the High Renaissance, Raphael.'
    },
    {
      id: '4',
      name: 'Michelangelo',
      nickname: 'Mike',
      img: Mike,
      color: '#f89e59',
      desc: 'Michelangelo (Mikey or Mike) – The optimistic teenager of the team, Michelangelo is a free-spirited, relaxed, goofy, mischievous, jokester known for his love of pizza and kind-hearted nature. Michelangelo wears an orange mask and wields a pair of nunchaku. He provides the comic relief, though he still has an adventurous side. The immature of the four Turtles, he shows characteristics of a "surfer" type and is often depicted with a Southern Californian accent. He is named after the Italian Renaissance painter, sculptor, architect, poet, and engineer, Michelangelo. His name was originally misspelled "Michaelangelo" by Peter Laird and Kevin Eastman'
    },
  ]
  return (
    <div>
      <header className="logo">
        <img src={Logo} alt="logo"/>
      </header>
       <Turtle turtlesArr = { turtles } />
    </div>
  );
}

export default App;
