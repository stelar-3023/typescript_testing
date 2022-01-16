import { Bowling } from '../Bowling';

describe('Bowling', () => {
  let bowling: Bowling;

  // added so we could remove from the test
  beforeEach(() => {
    bowling = new Bowling();
  });

  // added so we could remove from the test
  let addThrows = (pins: number, times: number) => {
    for (let i = 0; i < times; i++) {
      bowling.addThrow(pins);
    }
  };

  it('calculates all gutters', () => {
    addThrows(0, 20);
    expect(bowling.getScore()).toBe(0);
  });
  it('calculates all ones', () => {
    addThrows(1, 20);
    expect(bowling.getScore()).toBe(20);
  });
  it('calculates all twos', () => {
    addThrows(2, 20);
    expect(bowling.getScore()).toBe(40);
  });
  it('calculates all threes', () => {
    addThrows(3, 20);
    expect(bowling.getScore()).toBe(60); // 3 * 20 = 60
  });
  it('calculates all fours', () => {
    addThrows(4, 20);
    expect(bowling.getScore()).toBe(80);
  });
  it('spare and all gutters', () => {
    addThrows(5, 2);
    addThrows(0, 18);
    expect(bowling.getScore()).toBe(10);
  });
  it('spare and all ones', () => {
    addThrows(5, 2);
    addThrows(1, 18);
    expect(bowling.getScore()).toBe(29);
  });
  it('spare and all twos', () => {
    addThrows(5, 2);
    addThrows(2, 18);
    expect(bowling.getScore()).toBe(48);
  });
  it('spare and all threes', () => {
    addThrows(5, 2);
    addThrows(3, 18);
    expect(bowling.getScore()).toBe(67);
  });
  it('spare and all fours', () => {
    addThrows(5, 2);
    addThrows(4, 18);
    expect(bowling.getScore()).toBe(86);
  });
  it('two spares and all ones', () => {
    addThrows(5, 2);
    addThrows(5, 2);
    addThrows(1, 16);
    expect(bowling.getScore()).toBe(42);
  });
  it('two spares and all twos', () => {
    addThrows(5, 2);
    addThrows(5, 2);
    addThrows(2, 16);
    expect(bowling.getScore()).toBe(59);
  });
  it('two spares and all threes', () => {
    addThrows(5, 2);
    addThrows(5, 2);
    addThrows(3, 16);
    expect(bowling.getScore()).toBe(76);
  });
  it('strike and all gutters', () => {
    addThrows(10, 1);
    addThrows(0, 18);
    expect(bowling.getScore()).toBe(10);
  });
  it('strike and all ones', () => {
    addThrows(10, 1);
    addThrows(1, 18);
    expect(bowling.getScore()).toBe(30);
  });
  it('strike and all twos', () => {
    addThrows(10, 1);
    addThrows(2, 18);
    expect(bowling.getScore()).toBe(50);
  });
  it('strike and all threes', () => {
    addThrows(10, 1);
    addThrows(3, 18);
    expect(bowling.getScore()).toBe(70);
  });
  it('strike and all fours', () => {
    addThrows(10, 1);
    addThrows(4, 18);
    expect(bowling.getScore()).toBe(90);
  });
  it('perfect game', () => {
    addThrows(10, 12);
    expect(bowling.getScore()).toBe(300);
  });
});
