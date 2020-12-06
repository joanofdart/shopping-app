import { animate, AnimationEvent, state, style, transition, trigger,  } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';

export enum Direction {
  Previous,
  Next,
}

export enum Animation {
  Fade = 'fade',
  Slide = 'slide',
}

export interface Slide {
  url: string,
  description: string,
}

export interface ActiveSlides {
  previous: number;
  current: number;
  next: number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'slideState',
      [
        state(
          'current',
          style(
            {
              transform: 'translateX(0%)',
              zIndex: 1,
            }
          )
        ),
        state(
          'next',
          style(
            {
              transform: 'translateX(100%)',
              zIndex: 1,
            }
          )
        ),
        state(
          'previous',
          style(
            {
              transform: 'translateX(-100%)',
              zIndex: 1,
            }
          )
        ),
        transition('current => previous', animate('400ms ease-out')),
        transition('next => current', animate('400ms ease-out')),
      ]
    ),
  ]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides!: Slide[];
  @Input() showNavigation = false;
  @Input() showThumbnails = false;
  @Input() showDescriptions = true;
  @Input() animation: 'slide' | 'fade' = Animation.Fade;
  @Input() autoPlayDuration = 0;
  @Input() slideTemplateRef!: TemplateRef<any>;
  @Input() thumbnailTemplateRef!: TemplateRef<any>;
  @Input() descriptionTemplateRef!: TemplateRef<any>;
  @Output() _animationDone: EventEmitter<any> = new EventEmitter();
  @Output() _animationStarted: EventEmitter<any> = new EventEmitter();

  currentInterval!: any;
  differ!: KeyValueDiffer<ActiveSlides, any>;

  private _direction: Direction = Direction.Next;

  get direction() {
    return this._direction;
  }

  set direction(direction: Direction) {
    this._direction = direction;
  }

  private _activeSlides!: ActiveSlides;

  get activeSlides() {
    return this._activeSlides;
  }

  set activeSlides(activeSlides: ActiveSlides) {
    this._activeSlides = activeSlides;
  }

  constructor(private cd: ChangeDetectorRef, private differs: KeyValueDiffers){}

  ngOnInit(): void {
    if (this.slides) {
      this.activeSlides = this.getIndexes(0);
      this.differ = this.differs.find(this.activeSlides).create();
      if (this.slides.length > 1 && this.autoPlayDuration > 0) {
        this.startTimer();
      }
    }
  }

  ngOnDestroy(): void {
    this.resetTimer();
    this.cd.detach();
  }

  selectIndex(index: number): void {
    this.resetTimer();
    this.activeSlides = this.getIndexes(index);
    this.direction = this.getDirection(this.activeSlides.current, index);
    this.startTimer();

    if (this.differ.diff(this.activeSlides)) {
      this.cd.detectChanges();
    }
  }

  getDirection(oldIndex: number, newIndex: number): Direction {
    const images = this.slides;

    if (oldIndex === images.length - 1 && newIndex === 0) {
      return Direction.Next;
    } else if (oldIndex === 0 && newIndex === images.length - 1) {
      return Direction.Previous;
    }

    return oldIndex < newIndex ? Direction.Next : Direction.Previous;
  }

  getIndexes(index: number): ActiveSlides {
    const images = this.slides;

    return {
      previous: (index === 0 ? images.length - 1 : index - 1) % images.length,
      current: index % images.length,
      next: (index === images.length - 1 ? 0 : index + 1) % images.length
    }
  }

  getAnimationSlideState(index: number) {
    switch(index) {
      case this.activeSlides.current:
      return 'current';

      case this.activeSlides.next:
      return 'next';

      case this.activeSlides.previous:
      return 'previous';

      default:
      return '';
    }
  }

  startTimer(): void {
    this.resetTimer();

    if (this.autoPlayDuration > 0) {
      this.currentInterval = setInterval(() => this.selectIndex(this.activeSlides.next), this.autoPlayDuration);
    }
  }

  resetTimer(): void {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
  }

  animationDone(event: AnimationEvent) {
    this._animationDone.emit(event);
  }

  animationStarted(event: AnimationEvent) {
    this._animationStarted.emit(event);
  }

}
