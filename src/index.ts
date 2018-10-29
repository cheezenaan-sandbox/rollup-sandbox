export default class Sound {
  euphonium() {
    return 'Sound! Euphonium';
  }
  find() {
    return [1, 2, 3].find(n => n === 2);
  }
}

const sound = new Sound();

sound.euphonium();
sound.find();
