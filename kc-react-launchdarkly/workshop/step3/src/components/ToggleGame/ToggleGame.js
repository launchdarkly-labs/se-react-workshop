import { useEffect, useState } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import Config from './Config.js';
import Runner from './Runner.js';
import './ToggleGame.css';

export default function ToggleGame() {
    const { cloneMeDarkMode, cloneMeGameTheme } = useFlags();
    const oneHundredSprite = 'images/100-percent/100-sprite.png';
    const twoHundredSprite = 'images/200-percent/200-sprite.png';
    const [sprites, setSprites] = useState({ oneHundred: oneHundredSprite, twoHundred: twoHundredSprite });
    const [themeName, setThemeName] = useState('dino');

    useEffect(() => {
        if (!Runner.hasOwnProperty('instance_')) {
            new Runner('.interstitial-wrapper', Config);
        }
        Runner.instance_.updateGraphics();
    }, []);

    useEffect(() => {
        switch (cloneMeGameTheme.toLowerCase()) {
            case 'space':
                setSpaceTheme();
                break;
            case 'dino':
            default:
                setTRexTheme();
                break;
        }
    }, [cloneMeGameTheme]);

    useEffect(() => {
        const darkModeClass = 'dark-mode';
        (cloneMeDarkMode) ? document.body.classList.add(darkModeClass) :
            document.body.classList.remove(darkModeClass);
    }, [cloneMeDarkMode]);

    const setTRexTheme = () => {
        setThemeName('T-Rex');
        setSprites({
            oneHundred: oneHundredSprite,
            twoHundred: twoHundredSprite
        });
    };

    const setSpaceTheme = () => {
        setThemeName('Space');
        setSprites({
            oneHundred: 'images/100-percent/100-sprite-space.png',
            twoHundred: 'images/200-percent/200-sprite-space.png'
        });
    };

    return (
        <>
            <header>
                <h1 id='heading'>{themeName} Runner</h1>
            </header>
            <div className='interstitial-wrapper'></div>
            <div className='debug_info'></div>
            <div id='resources'>
                <img id='resources-1x' src={sprites.oneHundred} />
                <img id='resources-2x' src={sprites.twoHundred} />
                <div id='audio-resources'>
                    <audio id='sound-press' src='sounds/button-press.mp3'></audio>
                    <audio id='sound-hit' src='sounds/hit.mp3'></audio>
                    <audio id='sound-reached' src='sounds/score-reached.mp3'></audio>
                </div>
            </div>
        </>
    );
}