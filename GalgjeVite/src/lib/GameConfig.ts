import { GameStatusEnum } from './GameStatus'
import { push } from 'svelte-spa-router'

export class GameSetup {

    chosenLetters: string[] = [""];
    guessedWord: string;
    id: number;
    incorrectGuesses: number = 0;
    player: object;
    playerId: number;
    rightLetters: string;
    secretWord: string;
    status: GameStatusEnum;
    timeElapsed: string;
    timeFinished: string;
    timeStarted: string;
    wrongLetters: string;

    processGuess(letter : string) : string[] {
        if (this.secretWord.includes(letter) && !this.rightLetters.includes(letter))
            {
                this.rightLetters += letter;
            }
            else if (!this.secretWord.includes(letter) && !this.rightLetters.includes(letter))
            {
                this.wrongLetters += letter;
                this.incorrectGuesses += 1;
            }
        return this.updateChosenLetters();
    }

    updateGameStatus() : void
    {
        if (this.secretWord == this.guessedWord)
        {
            this.status = GameStatusEnum.Won;
            push('/won');
        }
        else if (this.incorrectGuesses == 7)
        {
            this.status = GameStatusEnum.Lost;
            push('./lost')
        }
    }

    buildWordToGuess() : string
    {
        let guessedWord : string = "";
        for (let i = 0; i < this.secretWord.length; i++)
        {
            if (this.rightLetters.includes(this.secretWord[i]) && this.rightLetters != null)
            {
                guessedWord += i;
            }
            else
            {
                guessedWord += " _ "
            }
        }
        return guessedWord;
    }

    updateChosenLetters() : string[] {
        let concatString = this.rightLetters + this.wrongLetters;
        let sortedArray = Array.from(concatString).sort();
        return sortedArray;
    }
};