import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    applications(): string;
    chess(): string;
    calculator(): string;
    maze(): string;
    sass_(): string;
    codepen(): string;
    tilt_maze(): string;
    dino(): string;
    solitaire(): string;
    sudoku(): string;
    puzzles(): string;
    tic_tac_toe(): string;
    clock(): string;
    hangman(): string;
    virtual_keyboard(): string;
}
