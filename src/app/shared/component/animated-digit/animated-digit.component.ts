import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-animated-digit',
  templateUrl: './animated-digit.component.html',
  styleUrls: ['./animated-digit.component.scss']
})
export class AnimatedDigitComponent implements OnInit,OnChanges, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() duration: number=0;
  @Input() digit: number=0;
  @Input() steps: number=0;
  @ViewChild("animatedDigit") animatedDigit?: ElementRef;

  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    this.counterFunc(this.digit, this.duration, this.animatedDigit);
  }

  counterFunc(endValue:number, durationMs:number, element:any) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    if (this.digit) {
      this.animateCount();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["digit"]) {
      this.animateCount();
    }
  }

}
