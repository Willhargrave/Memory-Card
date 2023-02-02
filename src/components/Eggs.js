import uniqid from 'uniqid'

const Eggs = [
    {id: uniqid(), name: 'Austin', img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSTMf1Oxud1n8Ghz-d66kiujwzRyevRDq3CQ9sF3Zr2Kj4BMmELRvEbZiMLeNXemgpkTRtBysdlxTivNfI"},
    {id: uniqid(), name: 'Bezos', img: require('../images/Bezos.jpg')},
    {id: uniqid(), name: 'Birdman', img: require('../images/Birdman.jpg')},
    {id: uniqid(), name: 'Dalia', img: require('../images/DaliaLama.jpg')},
    {id: uniqid(), name: 'Colina', img: require('../images/Colina.jpg')},
    {id: uniqid(), name: 'Khrushchev', img: require('../images/Khrushchev.jpg')},
    {id: uniqid(), name: 'Moby', img: require('../images/Moby.jpeg')},
    {id: uniqid(), name: 'Pitbull', img: require('../images/Pitbull.jpg')},
    {id: uniqid(), name: 'Rock', img: require('../images/Rock.jpg')},
    {id: uniqid(), name: 'Dyche', img: require('../images/sean-dyche.jpeg')},
    {id: uniqid(), name: 'Diesel', img: require('../images/Vin.jpg')},
    {id: uniqid(), name: 'Homer', img: require('../images/Homer.jpg')}


]

const randomEggs = () => {
    const shuffledEggs = Eggs.sort(() => 0.5 - Math.random());
    return shuffledEggs.slice(0, 12);
  };
export default randomEggs;