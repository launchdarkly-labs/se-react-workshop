import { useEffect } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import Config from './Config.js';
import Runner from './Runner.js';
import './ToggleGame.css';

export default function ToggleGame() {
    const { yourDarkModeFlag } = useFlags();

    useEffect(() => {
        if (!Runner.hasOwnProperty('instance_')) {
            new Runner('.interstitial-wrapper', Config);
        }
        Runner.instance_.updateGraphics();
    }, []);

    useEffect(() => {
        const darkModeClass = 'dark-mode';
        (yourDarkModeFlag) ? document.body.classList.add(darkModeClass) :
            document.body.classList.remove(darkModeClass);
    }, [yourDarkModeFlag]);

    return (
        <>
            <header>
                <h1 id='heading'>T-Rex Runner</h1>
            </header>
            <div className='interstitial-wrapper'></div>
            <div className='debug_info'></div>
            <div id='resources'>
                <img id='resources-1x' src='images/100-percent/100-sprite.png' />
                <img id='resources-2x' src='images/200-percent/200-sprite.png' />
                <div id='audio-resources'>
                    <audio id='sound-press' src='sounds/button-press.mp3'></audio>
                    <audio id='sound-hit' src='sounds/hit.mp3'></audio>
                    <audio id='sound-reached' src='sounds/score-reached.mp3'></audio>
                </div>
            </div>
        </>
    );
}