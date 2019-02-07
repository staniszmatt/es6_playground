import {Person, SuperPerson} from './person';

const matt = new Person('Matt');
const superMatt = new SuperPerson('Matthew', 'super healing power')
matt.great();

superMatt.great();
superMatt.saySuperPower("Super healing power");