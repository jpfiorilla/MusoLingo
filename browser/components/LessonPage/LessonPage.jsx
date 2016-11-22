import React from 'react'

export default class LessonPage extends React.Component {
    render(){
        return (
            <div>
                <div id="piano-container">
                    <ul id="piano">
                        <li><a href="#"></a><h3>1.1</h3><p>Notation</p></li>
                        <li><a href="#"></a><span></span><h3>1.2</h3><p>Notation</p></li>
                        <li><a href="#"></a><span></span><h3>1.3</h3><p>Notation</p></li>
                        <li><a href="#"></a><h3>1.4</h3><p>Notation</p></li>
                        <li><a href="#"></a><span></span><h3>1.5</h3><p>Notation</p></li>
                        <li><a href="#"></a><span></span><h3>About</h3></li>
                        <li><a href="#"></a><span></span><h3>Archives</h3>
                            <ul>
                                <li><a href="#">2007</a></li>
                                <li><a href="#">2006</a></li>
                                <li><a href="#">2005</a></li>
                                <li><a href="#">2004</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}