import {
    UI
} from "./UI.js";

export class Timer extends UI {
    _element = null;
    _interval = null;
    numberOfSeconds = 0;
    maxNumberOfSeconds = 999;

    init() {
        this._element = this.getElement(this.UiSelectors.timer)
    }

    startTimer() {
        this._interval = setInterval(() => this._updateTimer(), 1000)
    }
    stopTimer() {
        clearInterval(this._interval);
    }

    resetTimer() {
        this.numberOfSeconds = 0;
        this.setTimerValue(this.numberOfSeconds);
        this.stopTimer();
        this.startTimer();
    }

    _updateTimer() {
        this.numberOfSeconds++;
        this.numberOfSeconds <= this.maxNumberOfSeconds ?
            this.setTimerValue(this.numberOfSeconds) : this.stopTimer();
    }

    setTimerValue(value) {
        this._element.textContent = value;
    }

}