import React from 'react';
import './RandomTheme.css';
class RandomTheme extends React.Component {

    changeTheme = () => {
        const colorThemes = [
            {
                bgColor: '#232F3E',
                textColor: '#ffffff'
            },            

        ];
        const patterns = ['pattern1', 'pattern2', 'pattern12', 
            'pattern5', 'pattern4', '', 'pattern3', 'pattern6', 'pattern7', '', 'pattern8', 'pattern9', 'pattern10', 'pattern11'];
        const indexOfColors = Math.floor(Math.random() * colorThemes.length);
        const theme = colorThemes[indexOfColors];

        const indexOfPattern = Math.floor(Math.random() * patterns.length);
        const Pattern = patterns[indexOfPattern];

        this.props.onThemeChange(theme, Pattern);
    }

    render() {
        return (
            <div className="random-btn" onClick={this.changeTheme}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-shuffle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
            </div>
        );
    }
}
export default RandomTheme;
