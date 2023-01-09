"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    applications() {
        return this.appService.applications();
    }
    chess() {
        return this.appService.chess();
    }
    calculator() {
        return this.appService.calculator();
    }
    maze() {
        return this.appService.maze();
    }
    sass_() {
        return this.appService.sass_();
    }
    codepen() {
        return this.appService.codepen();
    }
    tilt_maze() {
        return this.appService.tilt_maze();
    }
    dino() {
        return this.appService.dino();
    }
    solitaire() {
        return this.appService.solitaire();
    }
    sudoku() {
        return this.appService.sudoku();
    }
    puzzles() {
        return this.appService.puzzles();
    }
    tic_tac_toe() {
        return this.appService.tic_tac_toe();
    }
    clock() {
        return this.appService.clock();
    }
    hangman() {
        return this.appService.hangman();
    }
    virtual_keyboard() {
        return this.appService.virtual_keyboard();
    }
};
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "applications", null);
__decorate([
    (0, common_1.Get)("/chess"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "chess", null);
__decorate([
    (0, common_1.Get)("/calculator"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "calculator", null);
__decorate([
    (0, common_1.Get)("/maze"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "maze", null);
__decorate([
    (0, common_1.Get)("/sass_"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "sass_", null);
__decorate([
    (0, common_1.Get)("/codepen"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "codepen", null);
__decorate([
    (0, common_1.Get)("/tilt_maze"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "tilt_maze", null);
__decorate([
    (0, common_1.Get)("/dino"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "dino", null);
__decorate([
    (0, common_1.Get)("/solitaire"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "solitaire", null);
__decorate([
    (0, common_1.Get)("/sudoku"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "sudoku", null);
__decorate([
    (0, common_1.Get)("/puzzles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "puzzles", null);
__decorate([
    (0, common_1.Get)("/tic_tac_toe"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "tic_tac_toe", null);
__decorate([
    (0, common_1.Get)("/clock"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "clock", null);
__decorate([
    (0, common_1.Get)("/hangman"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "hangman", null);
__decorate([
    (0, common_1.Get)("/virtual_keyboard"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "virtual_keyboard", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map