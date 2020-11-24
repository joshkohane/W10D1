import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import Tabs from './tabs'
import Weather from './weather'

const tabItems = [{title: 'one', content: 'I am the first'}, 
{title: 'two', content: 'Second pane here'}, 
{title: 'three', content: 'Third pane here'}];

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    ReactDOM.render(<div><Clock/> <Weather/> <Tabs tabs={tabItems}/> </div>, root);
});